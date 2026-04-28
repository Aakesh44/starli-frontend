import { getRelativeTime } from '@/lib/date&timeUtils';
import React from 'react';

interface CommentMetaInfoProps {
    authorName: string;
    createdAt: string;
    isAuthor: boolean;
};

const CommentMetaInfo = ({
    authorName,
    createdAt,
    isAuthor
}: CommentMetaInfoProps) => {
    return (
        <div className='w-full h-6 shrink-0 font-sans font-semibold flex items-center justify-start gap-2'>
            <p className=' text-primary-foreground'>{authorName}</p>
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