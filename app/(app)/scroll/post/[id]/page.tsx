"use client";
import CommentForm from '@/components/comments/comment-form';
import CommentList from '@/components/comments/comment-list';
import PostCard from '@/components/post//post-card/post-card';
import PostCardSkeleton from '@/components/post/post-card/post-card-skeleton';
import { Button } from '@/components/ui/button';
import { useComments } from '@/hooks/comment/use-comments';
import { usePost } from '@/hooks/posts/usePost';
import { cn } from '@/lib/utils';
import { Post } from '@/types/post';
import React, { use, useState } from 'react';
import UsersList from '@/components/users/users-list';

const options = ["COMMENTS", "UPVOTES"] as const;

const Page = ({ params }: { params: Promise<{ id: string }> }) => {

    const [activeTab, setActiveTab] = useState<typeof options[number]>('COMMENTS');
    const { id: postId } = use(params);

    // console.log('params', params, postId);

    const { data, isLoading } = usePost(postId);

    if (isLoading) return <PostCardSkeleton />;

    if (!data) return <div>Post not found</div>;

    return (
        <div className='w-full h-full flex flex-col items-start justify-start overflow-y-auto scrollbar-thin'>

            <PostCard mode='single' post={data.post} />

            <div className='w-full p-5'>

                <CommentForm targetId={data.post.id} targetType='POST' commentType='COMMENT' />

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
                            {option} • {option === "COMMENTS" ? data.post.counts.comments : data.post.counts.likes}
                        </Button>
                    )
                })}
            </div>

            {activeTab === "COMMENTS" ?
                <CommentList
                    targetId={data.post.id}
                    targetType='POST'
                    view='default'
                    className='p-5'
                /> :
                <UsersList
                    targetId={data.post.id}
                    targetType='POST'
                    view='default'
                />
            }


        </div>
    );
};

export default Page;