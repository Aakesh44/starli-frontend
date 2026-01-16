import { Post } from '@/types/post';
import React from 'react';
import { getRelativeTime } from '../../../lib/date&timeUtils';

type Props = {
    post: Post
};
const PostMetaInfo = ({
    post
}: Props) => {
    return (
        <div className='w-full text-slate-500 font-sans font-normal flex items-center justify-start gap-1'>
            <p>@aakesh</p>
            <p>•</p>
            <p>{post.tag}</p>
            <p>•</p>
            <p>{getRelativeTime(post.updatedAt)}</p>
        </div>
    );
};

export default PostMetaInfo;