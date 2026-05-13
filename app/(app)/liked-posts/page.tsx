import LikedPostsList from '@/components/likedPosts/likedPostsList';
import React from 'react';

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col overflow-y-auto scrollbar-thin'>
            <LikedPostsList />
        </div>
    );
};

export default Page;