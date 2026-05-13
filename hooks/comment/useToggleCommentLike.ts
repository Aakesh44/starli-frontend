import commentApi from "@/lib/api/comment-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentKeys } from "./use-comments";

const useToogleCommentLike = (commentId: string, type: 'COMMENT' | 'REPLY') => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async (liked: boolean) =>
            liked
                ? await commentApi.removeLikeFromComment(commentId)
                : await commentApi.addLikeToComment(commentId),

        onMutate: async () => {

            await queryClient.cancelQueries();

            const prevCommentList = queryClient.getQueriesData({ queryKey: commentKeys.lists() });
            const prevReplyList = queryClient.getQueriesData({ queryKey: commentKeys.replyLists() });

            if (type === 'COMMENT') {

                // Optimistically update the comment data on the comment list
                queryClient.setQueriesData(
                    { queryKey: commentKeys.lists() },
                    (oldData: any) => {
                        if (!oldData) return oldData;

                        return {
                            ...oldData,
                            pages: oldData.pages.map((page: any) => ({
                                ...page,
                                comments: page.comments.map((comment: any) => {
                                    if (comment.id === commentId) {
                                        return {
                                            ...comment,
                                            liked: !comment.liked,
                                            counts: {
                                                ...comment.counts,
                                                likes: comment.liked ? comment.counts.likes - 1 : comment.counts.likes + 1,
                                            }
                                        }
                                    }
                                    return comment;
                                })
                            }))
                        }
                    }
                );
            }
            else {

                // Optimistically update the comment data on the comment reply list
                queryClient.setQueriesData(
                    { queryKey: commentKeys.replyLists() },
                    (oldData: any) => {

                        console.log('🟢Old reply lists data:', oldData);
                        if (!oldData) return oldData;

                        return {
                            ...oldData,
                            pages: oldData.pages.map((page: any) => ({
                                ...page,
                                comments: page.comments.map((comment: any) => {
                                    if (comment.id === commentId) {
                                        return {
                                            ...comment,
                                            liked: !comment.liked,
                                            counts: {
                                                ...comment.counts,
                                                likes: comment.liked ? comment.counts.likes - 1 : comment.counts.likes + 1,
                                            }
                                        }
                                    }
                                    return comment;
                                })
                            }))
                        }
                    }
                );
            }



            return { prevCommentList, prevReplyList };
        },

        onError: (_, __, context) => {
            if (context?.prevCommentList) {
                queryClient.setQueriesData(
                    { queryKey: commentKeys.lists() },
                    context.prevCommentList
                );
            }
            if (context?.prevReplyList) {
                queryClient.setQueriesData(
                    { queryKey: commentKeys.replyLists() },
                    context.prevReplyList
                );
            }
        }


    });
};

export default useToogleCommentLike;