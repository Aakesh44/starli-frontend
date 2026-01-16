"use client";
import React from 'react';
import sampleImg from "@/public/images/sample2.jpg"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { ChevronDown, Circle, CircleCheck, CirclePlus, CircleX, Clock4, ImagePlus, Link2, TagIcon, Trash2 } from 'lucide-react';
import { Input, inputVariants } from '../ui/input';
import { Textarea } from '../ui/textarea';
import ChipInput from '../ui/chip-input';
import { SelectValue, SimpleSelect } from '../ui/select';
import SchedulePostTimeSelector from '../post/scheduled/schedule-post-time-selector';

const ProfileEditPage = () => {
    return (
        <div className='w-full h-[200dvh] font-sans flex flex-col gap-8'>

            <div className='w-full h-36 p-3 flex items-start justify-between bg-slate-200/50 border border-border/60 rounded-lg'>
                <div className='relative h-full aspect-square bg-white border border-border/60 rounded-lg overflow-hidden'>
                    <Image
                        src={sampleImg}
                        alt='cover-image'
                        fill
                        className='object-cover'
                    />
                </div>

                <label
                    htmlFor="upload-cover-image"
                    className={cn(buttonVariants({ variant: 'primary', size: 'icon-xxs', className: 'px-2.5 py-1.5 hover:text' }))}
                >
                    <ImagePlus className='stroke-[2.5]' />
                    <p className='hidden min-[380px]:block'>Add Cover Image</p>
                </label>
                <input type="file" id='upload-cover-image' hidden />
            </div>

            <div className='w-full h-fit md:h-12 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <label htmlFor="full_name" className='font-semibold'>Full name</label>
                    <p>You display name</p>
                </div>

                <div className='col-span-3 h-full grid place-items-center'>

                    <Input id='full_name' className='w-full h-10' />

                </div>

            </div>

            <div className='w-full h-fit md:h-12 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <label htmlFor="user_name" className='font-semibold'>Username</label>
                    <p>A unique name for your profile</p>
                </div>

                <div className='col-span-3 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 starli.com/</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>

            </div>

            <div className='w-full h-fit md:h-28 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <p className='font-semibold'>Profile Photo</p>
                    <p>Your profile photo</p>
                </div>

                <div className='col-span-3 h-full flex items-center justify-start gap-5'>


                    <div className='relative h-28 md:h-full aspect-square bg-white border border-border/60 rounded-lg overflow-hidden'>
                        <Image
                            src={sampleImg}
                            alt='cover-image'
                            fill
                            className='object-cover'
                        />
                    </div>

                    <div className='w-fit h-full flex flex-col items-start justify-center gap-2'>
                        <label
                            htmlFor="upload-cover-image"
                            className={cn(buttonVariants({ variant: 'primary', size: 'icon-xxs', className: 'w-fit min-[380px]:w-48  justify-start px-2.5 py-1.5 hover:text' }))}
                        >
                            <ImagePlus className='stroke-[2.5]' />
                            <p className='hidden min-[380px]:block'>Add cover image</p>
                        </label>
                        <input type="file" id='upload-cover-image' hidden />

                        <Button variant={"primary"} size={"icon-xxs"} className='w-fit min-[380px]:w-48 justify-start px-2.5 py-1.5 hover:text text-destructive'>
                            <Trash2 className='stroke-[2.5]' />
                            <p className='hidden min-[380px]:block'>Delete current image</p>
                        </Button>
                    </div>
                </div>

            </div>

            <div className='w-full h-fit md:h-28 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <label htmlFor="bio_text" className='font-semibold'>About you</label>
                    <p>Write a description of yourself</p>
                </div>

                <div className='col-span-3 h-full flex items-center justify-start gap-5'>

                    <Textarea id='bio_text' className='h-full resize-none' />

                </div>

            </div>

            <div className='w-full h-fit md:h-12 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <label htmlFor="personal_website" className='font-semibold'>Personal website</label>
                    <p>Your website, blog, or portfolio</p>
                </div>

                <div className='col-span-3 h-full grid place-items-center'>

                    <Input id='personal_website' className='w-full h-10' />

                </div>

            </div>

            <div className='w-full h-fit md:h-12 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 gap-y-3 bg-pink-2000'>

                <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                    <label htmlFor="location" className='font-semibold'>Location</label>
                </div>

                <div className='col-span-3 h-full grid place-items-center'>

                    <SimpleSelect
                        selectContent={
                            <SchedulePostTimeSelector
                                selectedDate={new Date()}
                            />
                        }
                    >
                        <Button asChild variant={"ghost_fit"} className={cn(inputVariants(), 'group w-full text-primary-foreground bg-transparent. shadow-none')}>
                            <div className='w-full flex justify-between bg-red-3000'>
                                <SelectValue placeholder='Bengaluru, IN' />
                                <ChevronDown className='ml-auto text-secondary-foreground group-hover:text-foreground' />
                            </div>
                        </Button>

                    </SimpleSelect>
                </div>

            </div>

            <div className='w-full flex items-center justify-center gap-4'>

                <span className='grow h-px bg-border/60' />

                <div className='flex items-center justify-center gap-2'>
                    <TagIcon className="size-5 stroke-[2.5] rotate-90" />
                    <p className='font-semibold'>
                        PROFILE TAGS
                    </p>
                </div>

                <span className='grow h-px bg-border/60' />

            </div>

            <div className='w-full h-fit md:h-28 min-h-28 flex flex-col items-start justify-start gap-2 bg-cyan-2000'>
                <div className='w-full flex items-center justify-between'>

                    <p className='font-semibold w-full'>Search skills, tools, interests</p>
                    <span className='text-sm text-secondary-foreground whitespace-nowrap'>Upto 10</span>
                </div>

                <div className='w-full grow bg-rose-3000'>

                    <ChipInput />
                </div>


            </div>

            <div className='w-full flex items-center justify-center gap-4'>

                <span className='grow h-px bg-border/60' />

                <div className='flex items-center justify-center gap-2'>
                    <Link2 className="z-0 size-5 stroke-[2.5] -rotate-45" />
                    <p className='font-semibold'>
                        SOCIAL LINKS
                    </p>
                </div>

                <span className='grow h-px bg-border/60' />

            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8'>

                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 github.com</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 figma.com/@</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 peelist.io/</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 linkedin.com/in/</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 twitter.com/</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
                <div className='col-span-1 h-full grid place-items-center'>

                    <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                        <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 instagram.com/</span>
                        <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                            <CircleCheck className='text-green-500 size-4' />
                            {/* <CircleX/> */}
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfileEditPage;