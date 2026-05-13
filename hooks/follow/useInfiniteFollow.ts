import bookmarkApi from "@/lib/api/bookmark-api";
import followApi from "@/lib/api/follow-api";
import { Post } from "@/types/post";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const followKeys = {
    all: ["follow"] as const,
    lists: () => [...followKeys.all, "list"] as const,
    list: (params: {
        type: "followers" | "following";
        limit?: number;
    }) => [
        ...followKeys.lists(),
        params.type,
        params.limit ?? null,
    ] as const,
};

export const useInfiniteFollow = ({
    userId,
    type,
    limit = 5,
}: {
    userId: string;
    type: "followers" | "following";
    limit?: number
}) => {
    return useInfiniteQuery({
        queryKey: followKeys.list({ limit, type }),
        queryFn: ({ pageParam }: { pageParam?: string }) =>
            followApi.getFollow({
                cursor: pageParam,
                limit,
                type,
                userId
            }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.cursor ?? undefined
    })
};
