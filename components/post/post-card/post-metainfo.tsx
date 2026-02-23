import { Post } from '@/types/post';
import React from 'react';
import { getRelativeTime } from '../../../lib/date&timeUtils';
import Link from 'next/link';

type Props = {
    post: Post
};
const PostMetaInfo = ({
    post
}: Props) => {
    return (
        <div className='w-full text-slate-500 font-sans font-normal flex items-center justify-start gap-1'>
            <Link
                href={`${post.author.username}`}
                className='hover:underline'
            >
                @{post.author.username}
            </Link>
            <p>•</p>
            <Link
                href={{
                    query: {
                        tag: post.tag?.split('#')[1]
                    }
                }}
                className='hover:underline'
            >
                {post.tag}
            </Link>
            <p>•</p>
            <p>{getRelativeTime(post.updatedAt)}</p>
        </div>
    );
};

export default PostMetaInfo;