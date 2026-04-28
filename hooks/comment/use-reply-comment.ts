// use-create-comment-reply.ts
import commentApi, { CommentTargetType } from '@/lib/api/comment-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentKeys } from './use-comments';
import { Comment } from '@/types/comment';
import { postsKeys } from '../posts/useInfinitePosts';
import { Post } from '@/types/post';

interface UseCreateCommentReplyOptions {
    parentId: string;
    targetId: string;
    targetType: CommentTargetType;
    limit?: number;
}

interface CreateReplyPayload {
    content: string;
    media: File[];
}

export const useCreateCommentReply = ({
    targetId,
    targetType,
    parentId,
    limit = 3,
}: UseCreateCommentReplyOptions) => {

    const queryClient = useQueryClient();
    const queryKey = commentKeys.replies(parentId, limit);

    return useMutation({

        mutationFn: async (payload: CreateReplyPayload) => {
            const reply = await commentApi.createReply({
                parentId,
                targetId,
                targetType,
                ...payload,
            });
            if (!reply) throw new Error('Failed to create reply');
            return reply;
        },

        onSuccess: (newReply: Comment) => {
            queryClient.setQueryData(queryKey, (old: any) => {

                console.log('🟢Updating query data for key:', queryKey);
                console.log('🟢Old data:', old);
                console.log('🟢New reply:', newReply);

                if (!old) return old;
                const [firstPage, ...rest] = old.pages;
                return {
                    ...old,
                    pages: [
                        {
                            ...firstPage,
                            comments: [newReply, ...firstPage.comments],
                        },
                        ...rest,
                    ],
                };
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
        },
    });
};