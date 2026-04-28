import React from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import CommentUser from './comment-metainfo';
import CommentContent from './comment-content';
import CommentMedia from './comment-media';
import CommentActions from './comment-actions';
import { Comment } from '@/types/comment';
import CommentReplies from './comment-replies';

const CommentItem = ({ comment, type = "COMMENT" }: {
    comment: Comment,
    type?: "COMMENT" | "REPLY"
}) => {

    const { author, content, media, createdAt } = comment;

    return (
        <div className='w-full h-fit flex items-start justify-start gap-2 bg-amber-3000'>

            <ProfileImageAvatar
                src={author.picture}
                alt='profile'
                fallback='A'
                className='size-9'
            />

            <div className='w-full h-fit space-y-2 bg-cyan-3000'>
                <CommentUser
                    authorName={author.name}
                    createdAt={createdAt}
                    isAuthor={false}
                />
                <CommentContent content={content} />
                <CommentMedia media={media} />
                <CommentActions comment={comment} type={type} />
                {type === "COMMENT" && <CommentReplies comment={comment} />}
            </div>

            {/* <CommentItem /> */}

        </div>
    );
};

export default CommentItem;