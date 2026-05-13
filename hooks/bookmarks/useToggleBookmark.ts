import bookmarkApi from "@/lib/api/bookmark-api";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postsKeys } from "../posts/useInfinitePosts";
import { bookmarksKeys } from "./useInfiniteBookmarks";
import { Post } from "@/types/post";

const useToggleBookmark = (postId: string) => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async (bookmarked: boolean) => bookmarked
            ? await bookmarkApi.deleteBookmark(postId)
            : await bookmarkApi.createBookmark({ targetId: postId }),

        onMutate: async () => {

            await queryClient.cancelQueries();

            const prevSingle = queryClient.getQueryData(['post', postId]);
            const prevPostList = queryClient.getQueriesData({ queryKey: postsKeys.lists() });
            const prevBookmarkList = queryClient.getQueriesData({ queryKey: bookmarksKeys.lists() });

            // Optimistically update the single post data
            queryClient.setQueryData(['post', postId], (oldData: { post: Post }) => {
                if (!oldData) return oldData;
                return {
                    ...oldData,
                    post: {
                        ...oldData.post,
                        bookmarked: !oldData.post.bookmarked,
                    }
                }
            });

            // Optimistically update the post in the post list
            queryClient.setQueriesData(
                { queryKey: postsKeys.lists() },
                (oldData: any) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        pages: oldData.pages.map((page: any) => {
                            return {
                                ...page,
                                posts: page.posts.map((post: Post) => {
                                    if (post.id === postId) {
                                        return {
                                            ...post,
                                            bookmarked: !post.bookmarked,
                                        };
                                    }
                                    return post;
                                }),
                            };
                        }),
                    };
                }
            );

            // Optimistically update the bookmark list
            queryClient.setQueriesData(
                { queryKey: bookmarksKeys.lists() },
                (oldData: any) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        pages: oldData.pages.map((page: any) => {
                            return {
                                ...page,
                                bookmarks: page.bookmarks.map((bookmark: Post) => {
                                    if (bookmark.id === postId) {
                                        return {
                                            ...bookmark,
                                            bookmarked: !bookmark.bookmarked,
                                        };
                                    }
                                    return bookmark;
                                }),
                            };
                        }),
                    };
                }
            );

            return {
                prevSingle,
                prevList: prevPostList,
                prevBookmarkList,
            }
        },

        onError: (_, __, context) => {
            if (context?.prevSingle) {
                queryClient?.setQueryData(['post', postId], context.prevSingle);
            }

            if (context?.prevList) {
                queryClient?.setQueriesData({ queryKey: postsKeys.lists() }, context.prevList);
            }

            if (context?.prevBookmarkList) {
                queryClient?.setQueriesData({ queryKey: bookmarksKeys.lists() }, context.prevBookmarkList);
            }
        }
    });
};

export default useToggleBookmark;