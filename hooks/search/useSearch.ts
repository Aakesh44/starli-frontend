import searchApi from "@/lib/api/search-api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const searchKeys = {

    all: ["search"] as const,

    lists: () => [...searchKeys.all, "list"] as const,

    list: (params: {
        type: string;
        q?: string;
        limit?: number;
    }) =>
        [
            ...searchKeys.lists(),
            params.type,
            params.q ?? null,
            params.limit ?? null,
        ] as const
};


export const useSearch = ({
    type,
    q = '',
    limit = 5,
}: {
    type: 'post' | 'user',
    q?: string,
    limit?: number
}) => {
    return useInfiniteQuery({
        queryKey: searchKeys.list({ type, q, limit }),
        queryFn: ({ pageParam }: { pageParam?: string }) =>
            searchApi.search({
                type,
                q,
                limit,
                cursor: pageParam
            }),
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.cursor ?? undefined,

    })
};