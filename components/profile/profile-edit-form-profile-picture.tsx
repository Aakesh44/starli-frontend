import React from 'react';
import sampleImg from "@/public/images/sample2.jpg"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { ImagePlus, Trash2 } from 'lucide-react';

const ProfileEditFormProfilePicture = () => {
    return (
        <div className='w-full h-full flex items-center justify-start gap-5'>

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
                    <p className='hidden min-[380px]:block'>Add profile image</p>
                </label>
                <input type="file" id='upload-cover-image' hidden />

                <Button variant={"primary"} size={"icon-xxs"} className='w-fit min-[380px]:w-48 justify-start px-2.5 py-1.5 hover:text text-destructive'>
                    <Trash2 className='stroke-[2.5]' />
                    <p className='hidden min-[380px]:block'>Delete profile image</p>
                </Button>
            </div>
        </div>
    );
};

export default ProfileEditFormProfilePicture;