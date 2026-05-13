import commentApi, { CommentTargetType } from "@/lib/api/comment-api";
import { Comment } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentKeys } from "@/hooks/comment/use-comments";
import { postsKeys } from "../posts/useInfinitePosts";
import { Post } from "@/types/post";

interface CreateCommentParams {
    targetId: string;
    targetType: CommentTargetType;
    limit?: number;
};

interface CreateCommentPayload {
    content: string;
    media: File | null;
}

export const useCreateComment = ({
    targetId,
    targetType,
    limit = 5
}: CreateCommentParams) => {

    const queryClient = useQueryClient();
    const queryKey = commentKeys.list(targetType, targetId, limit);

    return useMutation({
        mutationFn: (payload: CreateCommentPayload) => commentApi.createComment({
            targetId,
            targetType,
            content: payload.content,
            media: payload.media
        }),
        onSuccess: (newComment: Comment) => {

            // Update the comment list for the target post
            queryClient.setQueryData(queryKey, (oldData: any) => {
                if (!oldData) return oldData;

                const [firstPage, ...rest] = oldData.pages;

                return {
                    ...oldData,
                    pages: [
                        {
                            ...firstPage,
                            comments: [newComment, ...firstPage.comments]
                        },
                        ...rest
                    ]
                }
            });

            // Update the comment count for the target post
            queryClient.setQueryData(['post', targetId], (oldData: any) => {
                if (!oldData) return oldData;
                return {
                    ...oldData,
                    post: {
                        ...oldData.post,
                        counts: {
                            ...oldData.post.counts,
                            comments: oldData.post.counts.comments + 1
                        }
                    }
                }
            });

            // Optimistically update the post in the list
            queryClient.setQueriesData(
                { queryKey: postsKeys.lists() },
                (oldData: any) => {
                    if (!oldData) return oldData;
                    console.log('🟢Old posts list data:', oldData);
                    return {
                        ...oldData,
                        pages: oldData.pages.map((page: any) => ({
                            ...page,
                            posts: page.posts.map((post: Post) => {
                                if (post.id === targetId) {
                                    return {
                                        ...post,
                                        counts: {
                                            ...post.counts,
                                            comments: post.counts.comments + 1,
                                        }
                                    }
                                }
                                return post;
                            })
                        }))
                    };
                });
        }
    });
};