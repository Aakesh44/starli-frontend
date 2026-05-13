import React from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import CommentUser from './comment-metainfo';
import CommentContent from './comment-content';
import CommentMedia from './comment-media';
import CommentActions from './comment-actions';
import { Comment } from '@/types/comment';
import CommentReplies from './comment-replies';

const CommentItem = ({ comment, type = "COMMENT", view }: {
    comment: Comment,
    type?: "COMMENT" | "REPLY",
    view?: 'default' | 'compact';
}) => {

    const { author, content, media, createdAt } = comment;

    if (media.length) {
        console.log('media', media);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className='w-full h-fit flex items-start justify-start gap-2 bg-amber-3000'>

            <ProfileImageAvatar
                src={author.picture}
                alt='profile'
                fallback='A'
                className='size-9'
            />

            <div className='w-full h-fit space-y-2 bg-cyan-3000'>
                <CommentUser
                    author={author}
                    createdAt={createdAt}
                    isAuthor={false}
                />
                <CommentContent content={content} />
                <CommentMedia media={media} />
                <CommentActions comment={comment} type={type} />
                {type === "COMMENT" && <CommentReplies comment={comment} view={view} />}
            </div>

            {/* <CommentItem /> */}

        </div>
    );
};

export default CommentItem;