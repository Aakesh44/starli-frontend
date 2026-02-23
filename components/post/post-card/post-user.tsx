import ProfileHoverCard from '@/components/profile/profile-hover-card';
import { SimpleHoverCard } from '@/components/ui/hover-card';
import { Post } from '@/types/post';
import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {
    post: Post
};
const PostUser = ({
    post
}: Props) => {

    const { data } = useSession();

    return (
        <div className='w-full font-sans font-semibold flex items-center justify-start gap-2'>
            <SimpleHoverCard
                content={<ProfileHoverCard author={post.author} />}
                children={
                    <>
                        <p className=' text-primary-foreground hover:underline'>{post.author?.name || 'Anonymous'}</p>
                    </>
                }
            />
            {data?.user?.id !== post.author?.id && (
                <button className=' text-blue-500 font-semibold hover:underline cursor-pointer'>Follow</button>
            )}

        </div>
    );
};

export default PostUser;