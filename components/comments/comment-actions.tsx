"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Ellipsis } from 'lucide-react';
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import CommentExtraActionsDropdown from './comment-extra-actions-dropdown';
import CommentForm from './comment-form';
import { Comment } from '@/types/comment';

interface CommentActionsProps {
    comment: Comment,
    type: 'COMMENT' | 'REPLY'
};

const CommentActions = ({ comment, type = "COMMENT" }: CommentActionsProps) => {

    console.log(' ⚠️ comment in actions', comment);
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className='w-full h-8 text-xs font-medium flex items-center justify-start gap-4 bg-red-3000'>

                <button className='p-1 px-2 rounded-md hover:bg-border/80'>
                    Like • {comment.counts.likes}
                </button>

                <button onClick={() => setShowForm(prev => !prev)} className='p-1 px-2 rounded-md hover:bg-border/80'>
                    Reply
                </button>

                <SimpleDropDownMenu menuContent={<CommentExtraActionsDropdown />}>
                    <button className='p-1 px-2 rounded-md hover:bg-border/80'>
                        <Ellipsis className='size-3' />
                    </button>
                </SimpleDropDownMenu>

            </div>

            {showForm && (
                <CommentForm
                    targetId={comment.targetId}
                    targetType={comment.targetType}
                    parentId={type === 'COMMENT' ? comment.id : comment.parentId!}
                    commentType='REPLY'
                    onSuccess={() => setShowForm(false)}
                />
            )}
        </>
    );
};

export default CommentActions;