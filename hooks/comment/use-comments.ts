import commentApi, { CommentTargetType } from '@/lib/api/comment-api';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseCommentsParams {
    targetId: string;
    targetType: CommentTargetType;
    limit?: number;
    enabled?: boolean;
};

export const commentKeys = {
    list: (targetType: string, targetId: string, limit: number) =>
        ['comments', targetType, targetId, { limit }] as const,
    replies: (parentId: string, limit: number) =>
        ['comments', 'replies', parentId, { limit }] as const,
};

export const useComments = ({
    targetId,
    targetType,
    limit = 5,
    enabled = true
}: UseCommentsParams
) => {
    const query = useInfiniteQuery({
        queryKey: commentKeys.list(targetType, targetId, limit),
        queryFn: ({ pageParam }: { pageParam?: string }) => {
            return commentApi.getComments({
                cursor: pageParam,
                limit,
                targetId,
                targetType
            })
        },
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage?.cursor ?? undefined,
        enabled: enabled && Boolean(targetId) && Boolean(targetType)
    });

    const comments = query.data?.pages.flatMap(page => page?.comments) ?? [];

    return {
        ...query,
        comments,
        isLoadingInitial: query.isLoading,
        isLoadingMore: query.isFetchingNextPage,
        hasMore: query.hasNextPage,
        loadMore: query.fetchNextPage
    }
}