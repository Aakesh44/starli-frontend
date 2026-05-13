import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger, SimpleHoverCard } from '../ui/hover-card';
import { ProfileImageAvatar } from '../ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { User } from '@/types/user';
import { MessageCircleCode, MessageSquareDashed, MessageSquareDiff, MessageSquareText, MessagesSquare } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { useSession } from 'next-auth/react';
import followApi from '@/lib/api/follow-api';

type Props = {
    user: User
    content: React.ReactNode
};

const ProfileHoverCard = ({ user, content }: Props) => {
    return (
        <SimpleHoverCard
            content={<ProfileCard user={user} />}
            children={
                <>
                    {content}
                </>
            }
        />
    )
}

const ProfileCard = ({ user }: { user: User }) => {

    const { data } = useSession();

    console.log(' ⚠️ user in profile card', user);

    // return <ProfileCardSkeleton />

    return (
        <div onClick={(e) => e.stopPropagation()} className='w-72 h-fit p-3 font-sans space-y-2'>

            <div className='h-fit w-full flex items-center justify-between '>

                <ProfileImageAvatar src={user?.picture?.url} alt='profile' className='size-12 shrink-0 aspect-square' />

                {data?.user?.id !== user?.id && !user?.following && (

                    <div className='w-fit h-full flex items-start justify-start gap-2'>
                        {/* <Button className='h-8 aspect-square' variant={"primary"} size={"icon-xxs"}>
                            <MessageSquareText />
                        </Button> */}
                        <Button onClick={() => followApi.follow(user?.id)} className='h-8'>Follow</Button>
                    </div>
                )}

            </div>

            <Link href={`/${user?.username}`} className='font-medium hover:underline'>{user?.name}</Link>

            <div className='w-full text-slate-500 text-sm font-normal flex flex-wrap items-center justify-start gap-1'>
                <p >
                    @{user?.username}
                </p>
                {/* <p>•</p>
                <p>{"19 Followers"}</p> */}
            </div>

            <p className='text-sm line-clamp-2'>{user?.bio}</p>
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