import { ClockPlus, LoaderCircle } from 'lucide-react';
import React from 'react';
import PostScheduledListItem from './post-scheduled-list-item';
import { Post } from '@/types/post';

type PostScheduledListProps = {
    posts: Post[];
    loading: boolean;
};

const PostScheduledList = ({
    posts, loading,
}: PostScheduledListProps) => {
    return (
        <div className='w-full grow max-h-[500px] p-3 font-sans text-foreground flex flex-col gap-3 bg-lime-2000 overflow-y-auto scrollbar-thin scrollbar-none'>

            {loading ? (
                <PostScheduledLoading />
            )

                : posts?.length === 0 && (
                    <PostScheduledEmpty />
                )
            }

            {[...posts].map((post) => {
                return (
                    <PostScheduledListItem key={post.id} post={post} />
                )
            })}
        </div>
    );
};

const PostScheduledLoading = () => {
    return (
        <div className='w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <LoaderCircle className='stroke-[0.5] size-10 mb-8 animate-spin text-primary-foreground/80' />

            <p className='font-semibold'>Loading scheduled posts...</p>

        </div>
    )
}
const PostScheduledEmpty = () => {
    return (
        <div className='w-full grow p-3  flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <ClockPlus className='stroke-[0.5] size-10 mb-8 text-primary-foreground/80' />

            <p className='font-semibold'>No scheduled posts yet!</p>

            <p>You can schedule up to 5 posts.</p>

        </div>
    );
}

export default PostScheduledList;