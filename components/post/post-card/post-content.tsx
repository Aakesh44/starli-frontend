import { Post } from '@/types/post';
import React from 'react';

type Props = {
    post: Post
};
const PostContent = ({
    post
}: Props) => {
    return (
        <div className='w-full h-full font-sans flex flex-col items-start justify-start gap-2 bg-pink-2000'>

            <p className='font-semibold text-sm text-primary-foreground tracking-wide'>
                {post.title}
            </p>

            <p
                dangerouslySetInnerHTML={{ __html: post.content }}
                className='text-sm text-primary-foreground'
            />

        </div>
    );
};

export default PostContent;