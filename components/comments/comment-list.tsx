import React from 'react';
import CommentItem from './comment-item';
import { cn } from '@/lib/utils';

type CommentListProps = {

} & React.ComponentProps<'div'>;

const CommentList = ({ className, ...props }: CommentListProps) => {

    return (
        <div
            className={cn('w-full min-h-20 h-fit space-y-2 bg-blue-3000', className)}
            {...props}
        >
            {new Array(2).fill(0).map((_, index) => {
                return (
                    <CommentItem key={index} />
                )
            })}
        </div>
    );
};

export default CommentList;