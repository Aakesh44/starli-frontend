"use client";
import React from 'react';
import PostHeader from './post-header';
import PostContent from './post-content';
import PostMedia from './post-media';
import PostActions from './post-actions';
import PostEngagements from './post-engagement';
import CommentList from '../comments/comment-list';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface PostCardProps {
    mode?: 'scroll' | 'single';
};

const PostCard = ({ mode = 'scroll' }: PostCardProps) => {

    const router = useRouter();

    return (
        <article
            onClick={() => {
                if (mode === 'scroll') {
                    router.push('/scroll/post/abcd1234')
                }
            }}
            className={cn(
                'group w-full h-fit shrink-0 p-5 bg-gray-00 border-b border-border/60',
                mode === 'scroll' ? 'cursor-pointer hover:bg-slate-50' : ''
            )}>

            <PostHeader />

            <div className='w-full h-fit pt-2 pl-12 flex flex-col items-center justify-start gap-3 bg-cyan-2000'>

                <PostContent />

                <PostMedia />

                <PostActions />

                {mode === 'scroll' && (
                    <>
                        <PostEngagements />

                        <CommentList />
                    </>
                )}


            </div>

        </article>
    );
};

export default PostCard;