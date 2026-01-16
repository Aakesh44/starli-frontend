import React from 'react';
import PostDraftListItem from './post-draft-list-item';
import { LoaderCircle, LucideClock, LucideClockFading, NotebookPen } from 'lucide-react';
import { Post } from '@/types/post';

type PostDraftsListProps = {
    posts: Post[];
    loading: boolean;
};

const PostDraftsList = ({
    posts, loading,
}: PostDraftsListProps) => {
    return (
        <div className='w-full grow min-h-0 p-3 flex flex-col gap-3 bg-lime-2000 overflow-y-auto scrollbar-thin scrollbar-none'>

            {loading ? (
                <PostDraftsLoading />
            ) :

                posts?.length === 0 && (

                    <PostDraftEmpty />
                )
            }


            {[...posts].map((post) => {
                return (
                    <PostDraftListItem key={post.id} post={post} />
                )
            })}

        </div>
    );
};

const PostDraftsLoading = () => {
    return (
        <div className='w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <LoaderCircle className='stroke-[0.5] size-10 mb-8 animate-spin text-primary-foreground/80' />

            <p className='font-semibold'>Loading drafts...</p>

        </div>
    )
};

const PostDraftEmpty = () => {
    return (
        <div className='w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <NotebookPen className='stroke-[0.5] size-10 mb-8 text-primary-foreground/80' />

            <p className='font-semibold'>No drafts yet!</p>

            <p>Save up to 5 posts as drafts.</p>

        </div>
    );
};

export default PostDraftsList;