import { useInfiniteFollow } from '@/hooks/follow/useInfiniteFollow';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import React from 'react';
import UsersListItemSkeleton from '../users/users-list-item-skeleton';
import UsersListItem from '../users/users-list-item';
import { Telescope } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileFollowListProps {
    userId: string;
    type: "followers" | "following";
};

const ProfileFollowList = ({
    userId,
    type
}: ProfileFollowListProps) => {

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, isLoading } = useInfiniteFollow({
        userId,
        type,
        limit: 10
    });

    console.log(' data', data);

    const users = data?.pages.flatMap((page) => page.items) ?? [];

    const loadMoreRef = useInfiniteScroll(
        () => fetchNextPage(),
        Boolean(hasNextPage && !isFetchingNextPage)
    );

    if (isLoading) return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>
            {[...Array(4)].map((_, index) => {
                return (
                    <UsersListItemSkeleton key={index} />
                )
            })}
        </ul>
    )

    return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>

            {users.length === 0 && <ProfileFollowListEmpty type={type} />}

            {[...users].map((user) => {
                return (
                    <UsersListItem user={user} key={user.id} />
                )
            })}

            <div ref={loadMoreRef} />

            {isFetchingNextPage && <UsersListItemSkeleton />}

        </ul>
    );
};

const ProfileFollowListEmpty = ({ type }: { type: 'followers' | 'following' }) => {
    return (
        <div className='py-20 w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <Telescope className={cn('stroke-[0.8] size-10 mb-5 text-primary-foreground/80', type === 'followers' && 'scale-x-[-1]')} />

            <p className='font-semibold'>Nothing in sight!</p>

            <p>{type === 'followers' ? 'No followers yet!' : 'Connect with some friends!'}</p>

        </div>
    );
};

export default ProfileFollowList;