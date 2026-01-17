import Image from 'next/image';
import React from 'react';
import sampleImg from "@/public/images/sample2.jpg"
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { ImagePlus } from 'lucide-react';

const ProfileCoverImageEditForm = () => {
    return (
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
    );
};

export default ProfileCoverImageEditForm;