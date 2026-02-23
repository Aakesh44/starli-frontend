import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { ProfileImageAvatar } from '../ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { User } from '@/types/user';
import { MessageCircleCode, MessageSquareDashed, MessageSquareDiff, MessageSquareText, MessagesSquare } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { useSession } from 'next-auth/react';

type Props = {
    author: User
}
const ProfileHoverCard = ({ author }: Props) => {

    const { data } = useSession();

    // return <ProfileCardSkeleton />

    return (
        <div className='w-72 h-fit p-3 font-sans space-y-2'>
            <div className='h-14 w-full flex items-center justify-between bg-lime-2000'>

                <ProfileImageAvatar src='s' alt='aa' className='size-14 shrink-0 aspect-square' />

                {data?.user?.id == author?.id && (

                    <div className='w-fit h-full flex items-start justify-start gap-2'>
                        <Button className='h-8 aspect-square' variant={"primary"} size={"icon-xxs"}>
                            <MessageSquareText />
                        </Button>
                        <Button className='h-8'>Follow</Button>
                    </div>
                )}
            </div>

            <p>{author?.name}</p>

            <div className='w-full text-slate-500 font-normal flex items-center justify-start gap-1'>
                <Link
                    href={`${author?.username}`}
                    className='hover:underline'
                >
                    @{author?.username}
                </Link>
                <p>•</p>
                <p>{"19 Followers"}</p>
            </div>

            <p className='line-clamp-2'>{author?.bio}</p>
        </div>
    );
};

const ProfileCardSkeleton = () => {
    return (
        <div className='w-72 h-fit p-3 space-y-3'>
            <div className='h-14 w-full flex items-center justify-between'>

                <Skeleton className='size-14 aspect-square rounded-full' />

                <div className='w-fit h-full flex items-start justify-start gap-2'>
                    <Skeleton className='size-8' />
                    <Skeleton className='h-8 w-20' />
                </div>
            </div>

            <Skeleton className='w-2/5 h-4' />

            <div className='w-full flex items-center justify-start gap-1'>
                <Skeleton className='w-2/5 h-4' />
                <Skeleton className='size-1.5' />
                <Skeleton className='w-2/5 h-4' />
            </div>

            <Skeleton className='w-full h-4' />
        </div>
    );
};

export default ProfileHoverCard;