import bookmarkApi from "@/lib/api/bookmark-api";
import { Post } from "@/types/post";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const bookmarksKeys = {
    all: ["bookmarks"] as const,
    lists: () => [...bookmarksKeys.all, "list"] as const,
    list: (params: {
        limit?: number;
    }) => [
        ...bookmarksKeys.lists(),
        params.limit ?? null,
    ] as const,
};

export const useInfiniteBookmarks = ({
    limit = 5,
}: {
    limit?: number
}) => {
    return useInfiniteQuery({
        queryKey: bookmarksKeys.list({ limit }),
        queryFn: ({ pageParam }: { pageParam?: string }) =>
            bookmarkApi.getBookmarks({
                cursor: pageParam,
                limit
            }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.cursor ?? undefined
    })
};
