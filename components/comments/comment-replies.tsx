import { useCommentReplies } from '@/hooks/comment/use-comment-replies';
import { useCreateCommentReply } from '@/hooks/comment/use-reply-comment';
import { Comment } from '@/types/comment';
import React, { useEffect, useState } from 'react';
import CommentItem from './comment-item';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Button } from '../ui/button';
import CommandItemSkeleton from './command-item-skeleton';
import { useInView } from '@/hooks/useInView';

interface CommentActionsProps {
    comment: Comment,
    view?: 'default' | 'compact';
};

const CommentReplies = ({ comment, view = "default" }: CommentActionsProps) => {

    // const { ref, isInView } = useInView({
    //     once: false
    // });

    // console.log('⚠️⚠️⚠️⚠️⚠️ CommentReplies', isInView);

    const { replies, isLoading, isLoadingMore, hasMore, loadMore } = useCommentReplies({
        parentId: comment.id,
        enabled: Boolean(comment.id),
        limit: view === 'default' ? 3 : 1
    });

    const [viewMore, setViewMore] = useState(hasMore);

    useEffect(() => {
        setViewMore(view === 'default' ? hasMore : false);
    }, [hasMore, view]);


    const handleViewMore = () => {
        setViewMore(true);
        loadMore();
    };

    if (isLoading) return <CommandItemSkeleton />;

    if (!replies?.length) return null;


    return (
        <div className='space-y-2'>
            {[...replies].map((comment, index) => {
                return (
                    <CommentItem key={index} comment={comment} type='REPLY' />
                )
            })}

            {viewMore && !isLoadingMore && (

                <div className='pl-10 w-full flex items-center justify-start gap-2'>
                    <div className='h-px w-1/10 bg-border'></div>
                    <Button
                        variant={'ghost_no_hover'}
                        size={'fit'}
                        onClick={handleViewMore}
                        className='text-sm font-normal text-secondary-foreground'
                    >
                        View more replies
                    </Button>
                </div>
            )}

            {/* {viewMore && <button onClick={handleViewMore}>View more</button>} */}

            {/* <div ref={ref} >🟠🟠🟠🟠</div> */}
            {isLoadingMore && <CommandItemSkeleton />}

        </div>
    );
};

export default CommentReplies;