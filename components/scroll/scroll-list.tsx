"use client";

import React from 'react';
import PostCard from '../post/post-card/post-card';
import { useInfinitePosts } from '@/hooks/posts/useInfinitePosts';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Post } from '@/types/post';
import PostCardKkeleton from '../post/post-card/post-card-skeleton';
import PostCardSkeleton from '../post/post-card/post-card-skeleton';

const ScrollList = () => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfinitePosts({
        filter: "ALL"
    });

    console.log(' data', data);

    const posts = data?.pages.flatMap((page) => page.posts) ?? [];

    const loadMoreRef = useInfiniteScroll(
        () => fetchNextPage(),
        Boolean(hasNextPage && !isFetchingNextPage)
    );

    return (
        <ul className='h-grow. min-h-fit w-full flex flex-col items-center justify-start'>


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

export default ScrollList;