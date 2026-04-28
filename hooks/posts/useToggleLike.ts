import { postApi } from '@/lib/api/post-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postsKeys } from './useInfinitePosts';
import { Post } from '@/types/post';

const useToggleLike = (postId: string) => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async (liked: boolean) => liked ? await postApi.removeLikeFromPost(postId) : await postApi.addLikeToPost(postId),

        onMutate: async () => {

            console.log('Toggling like for post:', postId);

            await queryClient.cancelQueries();

            const prevSingle = queryClient.getQueryData(['post', postId]);
            const prevList = queryClient.getQueryData(postsKeys.all);

            // Optimistically update the single post data
            queryClient.setQueryData(['post', postId], (oldData: { post: Post }) => {
                if (!oldData) return oldData;
                console.log('🟢Old single post data:', oldData);
                return {
                    ...oldData,
                    post: {
                        ...oldData.post,
                        liked: !oldData.post.liked,
                        counts: {
                            ...oldData.post.counts,
                            likes: oldData.post.liked ? oldData.post.counts.likes - 1 : oldData.post.counts.likes + 1,
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
                                if (post.id === postId) {
                                    return {
                                        ...post,
                                        liked: !post.liked,
                                        counts: {
                                            ...post.counts,
                                            likes: post.liked ? post.counts.likes - 1 : post.counts.likes + 1,
                                        }
                                    }
                                }
                                return post;
                            })
                        }))
                    };
                });

            return { prevSingle, prevList };

        },

        onError: (_, __, context) => {
            if (context?.prevSingle) {
                queryClient.setQueryData(['post', postId], context.prevSingle);
            }
            if (context?.prevList) {
                queryClient.setQueryData(postsKeys.all, context.prevList);
            }
        },
        // onSettled: () => {
        //     queryClient.invalidateQueries(["post", postId]);
        //     queryClient.invalidateQueries(postsKeys.all);
        // }
    })

};

export default useToggleLike;