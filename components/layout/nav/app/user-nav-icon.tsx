"use client";
import { Avatar, AvatarFallback, AvatarImage, ProfileImageAvatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const UserNavIcon = () => {

    const session = useSession();
    const { user } = session.data || {};

    return (
        <SimpleTooltip content={"Profile"} >

            <Link
                href={'/aakesh'}
                className='rounded-full p-0 w-fit h-fit grid place-items-center'
            >
                <ProfileImageAvatar src={user?.image || './icons/star.png'} alt={user?.name || ''} fallback={user?.name || ''} />
            </Link>

            {/* <Button variant={"ghost"} size={"icon-sm"} className='rounded-full p-0 w-fit h-fit grid place-items-center'>


            </Button> */}

        </SimpleTooltip>
    );
};

export default UserNavIcon;