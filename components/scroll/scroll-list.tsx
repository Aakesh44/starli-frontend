"use client";

import React from 'react';
import PostCard from '../post/post-card/post-card';
import { useInfinitePosts } from '@/hooks/posts/useInfinitePosts';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Post } from '@/types/post';
import PostCardSkeleton from '../post/post-card/post-card-skeleton';
import { cn } from '@/lib/utils';
import { Telescope } from 'lucide-react';

interface ScrollListProps {
    author?: string;
};

const ScrollList = ({ author = undefined }: ScrollListProps) => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, isLoading } = useInfinitePosts({
        filter: "ALL",
        author: author,
    });

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
        <ul className='h-grow. min-h-fit w-full flex flex-col items-center justify-start'>

            {posts.length === 0 && author && <ScrollListEmpty />}

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

const ScrollListEmpty = () => {
    return (
        <div className='py-20 w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <Telescope className={cn('stroke-[0.8] size-10 mb-5 text-primary-foreground/80')} />

            <p className='font-semibold'>No Posts yet!</p>

            <p>Being active is the best way to get started.</p>

        </div>
    );
};

export default ScrollList;