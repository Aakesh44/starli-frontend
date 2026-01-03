"use client";
import CommentForm from '@/components/comments/comment-form';
import CommentList from '@/components/comments/comment-list';
import LikeList from '@/components/likes/like-list';
import PostCard from '@/components/post/post-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const options = ["COMMENTS", "UPVOTES"] as const;

const page = () => {

    const [activeTab, setActiveTab] = useState<typeof options[number]>('COMMENTS');

    return (
        <div className='w-full h-full flex flex-col items-start justify-start overflow-y-auto scrollbar-thin'>

            <PostCard mode='single' />

            <div className='w-full p-5'>

                <CommentForm />

            </div>

            <div className='w-full h-10 border-b border-border/60 flex items-center justify-center gap-5 bg-lime-2000'>

                {options?.map((option, ind) => {
                    return (

                        <Button
                            key={ind}
                            variant={"unstyled"}
                            onClick={() => setActiveTab(option)}
                            className={cn(
                                'z-20 w-fit h-full border-b border-b-transparent hover:border-b-green-500 rounded-none text-secondary-foreground',
                                option === activeTab ? 'text-green-500 border-b-green-500' : 'hover:text-primary-foreground'
                            )}
                        >
                            {option} • 2
                        </Button>
                    )
                })}
            </div>

            {activeTab === "COMMENTS" ?
                <CommentList className='p-5' /> :
                <LikeList />
            }


        </div>
    );
};

export default page;