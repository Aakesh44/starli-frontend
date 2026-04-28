import { useCommentReplies } from '@/hooks/comment/use-comment-replies';
import { useCreateCommentReply } from '@/hooks/comment/use-reply-comment';
import { Comment } from '@/types/comment';
import React from 'react';
import CommentItem from './comment-item';

interface CommentActionsProps {
    comment: Comment
};

const CommentReplies = ({ comment }: CommentActionsProps) => {

    const { replies, isLoading, isLoadingMore, hasMore, loadMore } = useCommentReplies({
        parentId: comment.id,
        enabled: Boolean(comment.id)
    });

    return (
        <div>
            {[...replies].map((comment, index) => {
                return (
                    <CommentItem key={index} comment={comment} type='REPLY' />
                )
            })}
        </div>
    );
};

export default CommentReplies;