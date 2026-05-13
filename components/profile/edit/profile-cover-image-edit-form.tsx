import Image from 'next/image';
import React, { Activity, useTransition } from 'react';
import sampleImg from "@/public/images/sample2.jpg"
import { cn, log } from '@/lib/utils';
import { buttonVariants } from '../../ui/button';
import { ImagePlus, LoaderCircle } from 'lucide-react';
import { useInstantTransition } from 'motion/react';
import userApi from '@/lib/api/user-api';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';

const ProfileCoverImageEditForm = () => {

    const [isLoading, startTransition] = useTransition();
    const { data: session, update } = useSession();


    const updateProfileCoverPicture = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];

        if (!file) {
            toast.error('Please select a file');
            return;
        };

        startTransition(async () => {
            try {

                const formData = new FormData();
                formData.append('file', file);

                const response = await userApi.updateProfileCoverPicture(formData);
                log('updateProfileCoverPicture response', response);
                e.target.value = '';

                await update({

                    user: {
                        ...session?.user,
                        cover_picture: response.data?.cover_picture
                    }

                });

            } catch (error) {
                log('updateProfileCoverPicture error', error);
            }
        });


    };

    return (
        <div
            className='relative w-full h-36 p-3 flex items-start justify-between bg-slate-200/50 border border-border/60 rounded-lg overflow-hidden'
        >
            <Image
                src={session?.user?.cover_picture?.url || sampleImg.src}
                alt='cover-image'
                fill
                className='object-cover z-10'
            />

            {isLoading && (
                <div className='absolute inset-0 bg-black/50 grid place-items-center'>
                    <LoaderCircle className='size-10 animate-spin text-white' />
                </div>
            )}

            <div className='relative z-20 h-full aspect-square bg-white border border-border/60 rounded-lg overflow-hidden'>
                <Image
                    src={session?.user?.picture?.url || sampleImg.src}
                    alt='cover-image'
                    fill
                    className='object-cover'
                />
            </div>

            <label
                htmlFor="upload-cover-image"
                className={cn('z-20', buttonVariants({ variant: 'primary', size: 'icon-xxs', className: 'px-2.5 py-1.5 hover:text' }))}
            >
                <ImagePlus className='stroke-[2.5]' />
                <p className='hidden min-[380px]:block'>Add Cover Image</p>
            </label>
            <input
                type="file"
                id='upload-cover-image'
                onChange={updateProfileCoverPicture}
                hidden
            />
        </div>
    );
};

export default ProfileCoverImageEditForm;