import React, { useTransition } from 'react';
import sampleImg from "@/public/images/sample2.jpg"
import Image from 'next/image';
import { cn, log } from '@/lib/utils';
import { Button, buttonVariants } from '../../ui/button';
import { ImagePlus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import userApi from '@/lib/api/user-api';

const ProfileEditFormProfilePicture = () => {

    const [isLoading, startTransition] = useTransition();

    const updateProfilePicture = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];

        if (!file) {
            toast.error('Please select a file');
            return;
        };

        startTransition(async () => {
            try {

                const formData = new FormData();
                formData.append('file', file);

                const response = await userApi.updateProfilePicture(formData);
                log('updateProfilePicture response', response);
                e.target.value = '';

            } catch (error) {
                log('updateProfilePicture error', error);
            }
        })
    };

    const handleRemoveProfilePicture = async () => {
        try {

            const res = await userApi.removeProfilePicture();

            toast.success('Profile picture removed successfully.');
            log('removeProfilePicture response', res);

        } catch (error) {
            log('handleRemoveProfilePicture error', error);
            toast.error('Error removing profile picture');
        }
    };

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

                <input
                    type="file"
                    id='upload-cover-image'
                    onChange={updateProfilePicture}
                    hidden
                />

                <Button
                    variant={"primary"}
                    size={"icon-xxs"}
                    onClick={handleRemoveProfilePicture}
                    className='w-fit min-[380px]:w-48 justify-start px-2.5 py-1.5 hover:text text-destructive'
                >
                    <Trash2 className='stroke-[2.5]' />
                    <p className='hidden min-[380px]:block'>Delete profile image</p>
                </Button>
            </div>
        </div>
    );
};

export default ProfileEditFormProfilePicture;