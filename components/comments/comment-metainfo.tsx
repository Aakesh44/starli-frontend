import { getRelativeTime } from '@/lib/date&timeUtils';
import React from 'react';
import { SimpleHoverCard } from '../ui/hover-card';
import ProfileHoverCard from '../profile/profile-hover-card';
import { User } from '@/types/user';

interface CommentMetaInfoProps {
    author: User;
    createdAt: string;
    isAuthor: boolean;
};

const CommentMetaInfo = ({
    author,
    createdAt,
    isAuthor
}: CommentMetaInfoProps) => {
    return (
        <div className='w-full h-6 shrink-0 font-sans text-sm font-semibold flex items-center justify-start gap-2'>

            <ProfileHoverCard
                user={author}
                content={<button className=' text-primary-foreground hover:underline'>{author?.name || 'Anonymous'}</button>}
            />

            <div className='w-fit text-slate-500 font-sans  text-xs font-normal flex items-center justify-start gap-1'>
                <p>{getRelativeTime(createdAt)}</p>
                {isAuthor && (
                    <>
                        <p>•</p>
                        <p>{'Author'}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default CommentMetaInfo;