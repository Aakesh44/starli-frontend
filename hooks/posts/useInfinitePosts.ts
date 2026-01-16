import { getPosts } from "@/lib/api/post-api";
import { Post } from "@/types/post";
import { InfiniteData, useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const postsKeys = {

    all: ["posts"] as const,

    lists: () => [...postsKeys.all, "list"] as const,

    list: (params: {
        author?: string;
        q?: string;
        tag?: string;
        filter?: string;
        limit?: number;
    }) =>
        [
            ...postsKeys.lists(),
            params.author ?? null,
            params.q ?? null,
            params.tag ?? null,
            params.filter ?? null,
            params.limit ?? null,
        ] as const,
};

export const useInfinitePosts = ({
    author,
    q,
    tag,
    filter,
    limit = 5,
}: {
    author?: string
    q?: string
    tag?: string
    filter?: "FOLLOWING" | "TRENDING" | "DRAFT" | "SCHEDULED" | "ALL"
    limit?: number
}) => {
    return useInfiniteQuery({
        queryKey: postsKeys.list({ author, q, tag, filter, limit }),
        queryFn: ({ pageParam }: { pageParam?: string }) =>
            getPosts({
                cursor: pageParam,
                limit,
                author,
                q,
                tag,
                filter
            }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.cursor ?? undefined
    })
};

export const prependPostToInfiniteData = (
    oldData: InfiniteData<any>,
    newPost: Post
): InfiniteData<any> => {

    console.log('🔥🔥 prependPostToInfiniteData', oldData, newPost);
    return {
        ...oldData,
        pages: oldData.pages.map((page, index) =>
            index === 0
                ? { ...page, posts: [newPost, ...page.posts] }
                : page
        ),
    };
};
