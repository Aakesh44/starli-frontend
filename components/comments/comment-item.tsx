import React from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import CommentUser from './comment-user';
import CommentContent from './comment-content';
import CommentMedia from './comment-media';
import CommentActions from './comment-actions';

const CommentItem = () => {
    return (
        <div className='w-full h-fit flex items-start justify-start gap-2 bg-amber-3000'>

            <ProfileImageAvatar
                src=''
                alt='profile'
                fallback='A'
                className='size-9'
            />

            <div className='w-full h-fit space-y-2 bg-cyan-3000'>
                <CommentUser />
                <CommentContent />
                <CommentMedia />
                <CommentActions />
            </div>

            {/* <CommentItem /> */}

        </div>
    );
};

export default CommentItem;