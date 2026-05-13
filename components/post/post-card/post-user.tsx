import ProfileHoverCard from '@/components/profile/profile-hover-card';
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

            <ProfileHoverCard
                user={post.author}
                content={<button className=' text-primary-foreground hover:underline'>{post?.author?.name || 'Anonymous'}</button>}
            />

            {/* {!post.isMine && !post.author.following && (
                <button className=' text-blue-500 font-semibold hover:underline cursor-pointer'>Follow</button>
            )} */}

        </div>
    );
};

export default PostUser;