import { Post } from '@/types/post';
import React from 'react';

type Props = {
    post: Post
};
const PostUser = ({
    post
}: Props) => {
    return (
        <div className='w-full font-sans font-semibold flex items-center justify-start gap-2'>
            <p className=' text-primary-foreground'>{post.author?.name || 'Anonymous'}</p>
            <button className=' text-blue-500 font-semibold hover:underline cursor-pointer'>Follow</button>
        </div>
    );
};

export default PostUser;