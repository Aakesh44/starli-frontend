import React from 'react';
import CommentItem from './comment-item';
import { cn } from '@/lib/utils';
import { CommentTargetType } from '@/lib/api/comment-api';
import { useComments } from '@/hooks/comment/use-comments';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

type CommentListProps = {
    targetId: string;
    targetType: CommentTargetType;
} & React.ComponentProps<'div'>;

const CommentList = ({ targetId, targetType, className, ...props }: CommentListProps) => {

    const { comments, isLoading, isLoadingMore, hasMore, loadMore } = useComments({
        targetId: targetId,
        targetType: targetType,
        limit: 5
    });

    const loadMoreRef = useInfiniteScroll(
        () => loadMore(),
        Boolean(hasMore && !isLoadingMore)
    );

    if (isLoading) return <div>Loading...</div>;

    if (!comments?.length) return null;

    return (
        <div
            className={cn('w-full min-h-20 h-fit space-y-2 bg-blue-3000', className)}
            {...props}
        >
            {[...comments].map((comment, index) => {
                return (
                    <CommentItem key={index} comment={comment} type='COMMENT' />
                )
            })}

            <div ref={loadMoreRef} />

            {isLoadingMore && <div>Loading more...</div>}

        </div>
    );
};

export default CommentList;