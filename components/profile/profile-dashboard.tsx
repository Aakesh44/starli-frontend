"use client";
import React, { useEffect, useState, useTransition } from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import skillIcon from "@/public/icons/skills/javascript.svg";

import { Button, buttonVariants } from '../ui/button';
import { Link2, MapPin, PencilLine, Sparkle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { cn, log } from '@/lib/utils';
import Link from 'next/link';
import sampleImg from "@/public/images/sample2.jpg"
import { usePathname } from 'next/navigation';
import { User } from '@/types/user';
import userApi from '@/lib/api/user-api';
import { format } from 'date-fns';
import ProfileDashboardMetadata from './profile-dashboard-metadata';

const options = ["WORK", "RESUME", "COLLECTIONS", "POSTS"] as const;

const ProfileDashboard = () => {

    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<typeof options[number]>('WORK');

    const [userData, setUserData] = useState<User | null>(null);
    const [isLoading, startTransition] = useTransition();

    const handleGetProfileData = async () => {
        try {

            const res = await userApi.getUserProfileByUsername(pathname?.split('/')[1] || '');

            setUserData(res.data?.data || null);

            log('getUserProfileByUsername response', res);

        } catch (error) {
            log('handleGetProfileData error', error);
        }
    };

    useEffect(() => {
        startTransition(() => handleGetProfileData());
    }, []);

    if (isLoading)
        return (
            <div className='w-full max-w-full h-[100dvh] lg:w-[640px] 2xl:w-2xl font-sans flex flex-col items-start md:items-center justify-start gap-5 border border-border/60 rounded-lg overflow-hidden bg-white text-primary.' />
        )

    if (!userData) return (
        <div className='w-full max-w-full h-[100dvh] lg:w-[640px] 2xl:w-2xl font-sans flex flex-col items-start md:items-center justify-start gap-5 border border-border/60 rounded-lg overflow-hidden bg-white text-primary.'>
            NOT FOUND 404
        </div>
    )

    return (
        <div className='w-full max-w-full h-[100dvh] lg:w-[640px] 2xl:w-2xl font-sans flex flex-col items-start md:items-center justify-start gap-5 border border-border/60 rounded-lg overflow-hidden bg-white text-primary.'>


            <div className='w-full h-fit p-4 md:p-5 flex flex-col items-start md:items-center justify-start gap-3 bg-lime-2000'>

                <div className='min-h-fit h-12 w-full flex items-center justify-start  gap-2 bg-cyan-3000'>
                    <ProfileImageAvatar
                        src={userData?.picture ?? ''}
                        alt='profile'
                        className='size-12'
                    />

                    <div className='h-full w-fit flex flex-col gap-0.5'>
                        <p className=' text-base font-semibold'>{userData?.name}</p>
                        <div className='text-xs text-secondary-foreground'>
                            <Link href={'#'} className='hover:underline'>
                                <span className='font-semibold'>13</span> followers
                            </Link>
                            <span className=''>{" "} • {" "}</span>
                            <Link href={'#'} className='hover:underline'>
                                <span className='font-semibold'>13</span> followers
                            </Link>
                        </div>
                    </div>

                    <Link href={{
                        pathname: '/user/settings/profile',
                    }}
                        className={cn(buttonVariants({ variant: 'primary', size: 'icon-xxs' }), 'ml-auto p-2 md:py-1 shadow md:shadow-none')}>
                        <PencilLine className='size-4' />
                        <p className='hidden md:block'>Edit Profile</p>
                    </Link>
                </div>

                <div className='relative w-full h-44 flex items-center justify-start md:justify-center rounded-lg  bg-cyan-200'>

                    <Image
                        src={userData?.cover_picture ?? sampleImg.src}
                        alt='cover image'
                        fill
                        className='object-cover rounded-lg'
                    />

                    <div className='relative size-20 md:mt-44 rounded-full shadow bg-rose-40 '>
                        <ProfileImageAvatar
                            src={userData?.picture ?? ''}
                            alt='profile'
                            className='size-full'
                        />
                        <label
                            htmlFor="profile_image"
                            className={cn(buttonVariants({ variant: 'primary', size: 'icon-xxs' }), 'absolute bottom-0 right-0 p-1')}
                        >
                            <PencilLine />
                        </label>
                        <input type='file' id='profile_image' hidden />
                    </div>

                </div>

                <p className='md:mt-10 text-lg font-semibold'>{userData?.name}</p>

                <p className='w-full md:w-4/5 text-start md:text-center text-sm '>
                    {userData?.bio}
                </p>

                <ProfileDashboardMetadata userData={userData} />

                <ul className='w-full flex items-start justify-start md:justify-center md:flex-wrap overflow-x-auto scrollbar-none gap-3 bg-cyan-2000'>
                    {[...userData?.profile_tags || []].map((tag, index) => {
                        return (
                            <li key={index} className='shrink-0'>
                                <Button variant={"primary"} size={"icon-xxs"} className='w-fit min-w-fit p-1 px-2.5 flex items-center justify-start gap-1.5 '>
                                    <Image src={skillIcon} alt='skill' width={16} height={16} className={''} />
                                    <p className='text-xs font-medium'>{tag}</p>
                                </Button>
                            </li>
                        )
                    })}
                </ul>

            </div>

            <div className='w-full md:w-5/6 h-fit px-4 md:px-0 border-b border-border/60 flex items-center justify-start md:justify-center gap-5 overflow-x-auto scrollbar-none bg-lime-2000'>

                {options?.map((option, ind) => {
                    return (

                        <Link
                            key={ind}
                            href={option.toLowerCase()}
                            // variant={"unstyled"}
                            onClick={() => setActiveTab(option)}
                            className={cn(
                                'z-10 w-fit h-fit flex-shrink-0 pb-2 text-xs border-b border-b-transparent bg-amber-3000 hover:border-b-green-500 rounded-none font-medium text-primary-foreground',
                                option === activeTab ? 'text-green-600 border-b-green-500' : 'hover:text-primary-foreground'
                            )}
                        >
                            {option} • 2
                        </Link>
                    )
                })}
            </div>

        </div>
    );
};

export default ProfileDashboard;