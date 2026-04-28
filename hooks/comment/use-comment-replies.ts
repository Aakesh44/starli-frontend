import { useInfiniteQuery } from "@tanstack/react-query";
import { commentKeys } from './use-comments';
import commentApi from "@/lib/api/comment-api";

interface UseCommentRepliesOptions {
    parentId: string;
    limit?: number;
    enabled?: boolean;
};

export const useCommentReplies = ({
    parentId,
    limit = 3,
    enabled = true
}: UseCommentRepliesOptions) => {
    const query = useInfiniteQuery({
        queryKey: commentKeys.replies(parentId, limit),
        queryFn: async ({ pageParam }: { pageParam?: string }) => {
            const result = await commentApi.getReplies({
                commentId: parentId,
            });

            return result;
        },
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage?.cursor ?? undefined,
        enabled: enabled && Boolean(parentId)
    });

    const replies = query.data?.pages.flatMap(page => page?.comments) ?? [];

    return {
        ...query,
        replies,
        isLoadingInitial: query.isLoading,
        isLoadingMore: query.isFetchingNextPage,
        hasMore: query.hasNextPage,
        loadMore: query.fetchNextPage
    }
}