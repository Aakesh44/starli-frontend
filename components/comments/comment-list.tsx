import React from 'react';
import CommentItem from './comment-item';
import { cn } from '@/lib/utils';
import { CommentTargetType } from '@/lib/api/comment-api';
import { useComments } from '@/hooks/comment/use-comments';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import CommandItemSkeleton from './command-item-skeleton';
import { useInView } from '@/hooks/useInView';
import { MessageSquareText, NotebookPen } from 'lucide-react';

type CommentListProps = {
    targetId: string;
    targetType: CommentTargetType;
    view?: 'default' | 'compact';
} & React.ComponentProps<'div'>;

const CommentList = ({ targetId, targetType, view = 'default', className, ...props }: CommentListProps) => {

    const { ref, isInView } = useInView({ once: false });
    console.log('⚠️⚠️⚠️⚠️⚠️ CommentList', isInView);

    const { comments, isLoading, isLoadingMore, hasMore, loadMore } = useComments({
        targetId: targetId,
        targetType: targetType,
        limit: view === 'default' ? 5 : 2,
        enabled: isInView
    });

    const loadMoreRef = useInfiniteScroll(
        () => loadMore(),
        Boolean(hasMore && !isLoadingMore && view === 'default')
    );

    if (isLoading) return <CommandItemSkeleton />;

    // if (!comments?.length && view === 'default') return <CommentListEmpty />;

    return (
        <div
            ref={ref}
            className={cn('w-full h-fit space-y-2 bg-blue-3000', className)}
            {...props}
        >

            {view === 'default' && !comments?.length && <CommentListEmpty />}

            {[...comments].map((comment, index) => {
                return (
                    <CommentItem key={index} comment={comment} type='COMMENT' view={view} />
                )
            })}

            <div ref={loadMoreRef} />

            {isLoadingMore && <CommandItemSkeleton />}

        </div>
    );
};

const CommentListEmpty = () => {
    return (
        <div className='py-20 w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <MessageSquareText className='stroke-[0.8] size-10 mb-5 text-primary-foreground/80' />

            <p className='font-semibold'>Your upvotes and feedback are welcome!</p>

            <p>Words have more power than we think. Be kind.</p>

        </div>
    );
};

export default CommentList;