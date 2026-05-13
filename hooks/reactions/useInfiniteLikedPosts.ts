import { postApi } from "@/lib/api/post-api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const likedPostsKeys = {
    all: ["likedPosts"] as const,
    lists: () => [...likedPostsKeys.all, "list"] as const,
    list: (params: {
        limit?: number;
    }) => [
        ...likedPostsKeys.lists(),
        params.limit ?? null,
    ] as const,
};

export const useInfiniteLikedPosts = ({
    limit = 5,
}: {
    limit?: number
}) => {
    return useInfiniteQuery({
        queryKey: likedPostsKeys.list({ limit }),
        queryFn: ({ pageParam }: { pageParam?: string }) =>
            postApi.getLikedPosts({
                cursor: pageParam,
                limit
            }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.cursor ?? undefined
    })
};
