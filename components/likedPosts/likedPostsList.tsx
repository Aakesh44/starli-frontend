"use client";

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import React from 'react';
import PostCard from '../post/post-card/post-card';
import PostCardSkeleton from '../post/post-card/post-card-skeleton';
import { useInfiniteLikedPosts } from '@/hooks/reactions/useInfiniteLikedPosts';

const LikedPostsList = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, isLoading } = useInfiniteLikedPosts({});

    console.log(' data', data);

    const posts = data?.pages.flatMap((page) => page.posts) ?? [];

    const loadMoreRef = useInfiniteScroll(
        () => fetchNextPage(),
        Boolean(hasNextPage && !isFetchingNextPage)
    );

    if (isLoading) return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>
            {[...Array(4)].map((_, index) => {
                return (
                    <PostCardSkeleton key={index} />
                )
            })}
        </ul>
    )

    return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>


            {[...posts].map((post) => {
                return (
                    <PostCard post={post} key={post.id} />
                )
            })}

            <div ref={loadMoreRef} />

            {isFetchingNextPage && <PostCardSkeleton />}

        </ul>
    );
};

export default LikedPostsList;