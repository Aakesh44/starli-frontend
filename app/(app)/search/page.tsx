import BookmarkList from '@/components/bookmark/bookmarkList';
import SearchResultList from '@/components/search/search-result-list';
import SearchForm from '@/components/search/searchForm';
import React, { Suspense } from 'react';

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col overflow-y-auto scrollbar-thin'>
            <SearchForm />
            <Suspense fallback={<p>Loading...</p>}>
                <SearchResultList />
            </Suspense>
        </div>
    );
};

export default Page;