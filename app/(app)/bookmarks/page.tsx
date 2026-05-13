import BookmarkList from '@/components/bookmark/bookmarkList';
import React from 'react';

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col overflow-y-auto scrollbar-thin'>
            <BookmarkList />
        </div>
    );
};

export default Page;