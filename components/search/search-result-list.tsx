"use client";

import { useSearch } from '@/hooks/search/useSearch';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { options } from './searchForm';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Post } from '@/types/post';
import { User } from '@/types/user';
import PostCard from '../post/post-card/post-card';
import PostCardSkeleton from '../post/post-card/post-card-skeleton';
import UsersListItem from '../users/users-list-item';
import UsersListItemSkeleton from '../users/users-list-item-skeleton';
import { MessageSquareText, Telescope } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchResultList = () => {

    const params = useSearchParams();
    const qType = (params.get('type') as 'people' | 'posts') === 'posts' ? 'post' : 'user';
    const qQuery = params.get('q') || '';

    console.log('⚠️🟢🟢⚠️SearchResultList params', params.get('q'));

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useSearch({
        type: qType,
        q: qQuery,
        limit: 5
    });

    const items = data?.pages.flatMap(page => page.items) || [];

    console.log('⚠️⚠️SearchResultList data', data);

    const loadMoreRef = useInfiniteScroll(
        () => fetchNextPage(),
        Boolean(hasNextPage && !isFetchingNextPage)
    );

    if (isLoading) return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>
            {[...Array(4)].map((_, index) => (
                qType === 'user' ?
                    <UsersListItemSkeleton key={index} /> :
                    <PostCardSkeleton key={index} />
            ))}
        </ul>
    )

    return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>

            {items.length === 0 && (
                <SearchResultListEmpty type={qType} />
            )}

            {[...items].map((item) => {
                if (qType === 'user') {
                    return (
                        <UsersListItem key={item.id} user={item as User} />
                    )
                }
                return (
                    <PostCard post={item} key={item.id} />
                )
            })}

            <div ref={loadMoreRef} />

            {isFetchingNextPage && <PostCardSkeleton />}

        </ul>
    );
};

const SearchResultListEmpty = ({ type }: { type: 'post' | 'user' }) => {
    return (
        <div className='py-20 w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <Telescope className={cn('stroke-[0.8] size-10 mb-5 text-primary-foreground/80', type === 'user' && 'scale-x-[-1]')} />

            <p className='font-semibold'>Nothing in sight!</p>

            <p>Try searching for something else.</p>

        </div>
    );
};

export default SearchResultList;