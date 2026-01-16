"use client";
import React, { useState } from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import skillIcon from "@/public/icons/skills/javascript.svg";

import { Button, buttonVariants } from '../ui/button';
import { Link2, MapPin, PencilLine, Sparkle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import sampleImg from "@/public/images/sample2.jpg"
import { usePathname } from 'next/navigation';

const options = ["WORK", "RESUME", "COLLECTIONS", "POSTS"] as const;

const ProfileDashboard = () => {

    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<typeof options[number]>('WORK');

    return (
        <div className='w-full max-w-full h-[100dvh] lg:w-[640px] 2xl:w-2xl font-sans flex flex-col items-start md:items-center justify-start gap-5 border border-border/60 rounded-lg overflow-hidden bg-white text-primary.'>

            <div className='w-full h-fit p-4 md:p-5 flex flex-col items-start md:items-center justify-start gap-5 bg-lime-2000'>
                <div className='min-h-fit h-12 w-full flex items-center justify-start  gap-2 bg-cyan-3000'>
                    <ProfileImageAvatar
                        src=''
                        alt=''
                        className='size-12'
                    />

                    <div className='h-full w-fit flex flex-col gap-0.5'>
                        <p className=' text-base font-semibold'>Aakesh V M</p>
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
                        src={sampleImg}
                        alt='cover image'
                        fill
                        className='object-cover rounded-lg'
                    />

                    <div className='relative size-20 md:mt-44 rounded-full shadow bg-rose-40 '>
                        <ProfileImageAvatar
                            src=''
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

                <p className='md:mt-10 text-lg font-semibold'>Aakesh V M</p>

                <p className='w-full md:w-4/5 text-start md:text-center text-sm '>
                    Frontend Dev (2 yrs) skilled in Next.js, React & TypeScript. Passionate about clean UIs, smooth UX & scalable apps.
                </p>

                <div className='w-full h-fit text-xs flex items-center justify-start md:justify-center flex-wrap gap-4 bg-yellow-3000'>

                    <div className='w-fit flex items-center justify-start gap-1'>
                        <Sparkles className="size-4 stroke-[2.5]" />
                        <p>Joined 29 Aug 2025</p>
                    </div>
                    <div className='w-fit flex items-center justify-start gap-1'>
                        <MapPin className="size-4 stroke-[2.5]" />
                        <p>Bengaluru, IN</p>
                    </div>
                    <div className='w-fit flex items-center justify-start gap-1'>
                        <Link2 className="size-4 stroke-[2.5] -rotate-45" />
                        <a
                            href='https://aakesh.vercel.app'
                            target='_blank'
                            rel="noopener noreferrer"
                            className='hover:underline'

                        >aakesh.vercel.app</a>
                    </div>
                </div>

                <ul className='w-full  flex items-start justify-start md:justify-center md:flex-wrap overflow-x-auto scrollbar-none gap-3 bg-cyan-2000'>
                    {new Array(10).fill(0).map((_, index) => {
                        return (
                            <li key={index} className='shrink-0'>
                                <Button variant={"primary"} size={"icon-xxs"} className='w-fit min-w-fit p-1 px-2.5 flex items-center justify-start gap-1.5 '>
                                    <Image src={skillIcon} alt='skill' width={16} height={16} className={''} />
                                    <p className='text-xs font-medium'>JavsScript</p>
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