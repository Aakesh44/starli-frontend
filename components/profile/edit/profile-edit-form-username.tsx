import React, { useEffect, useState, useTransition } from 'react';
import { Input, inputVariants } from '../../ui/input';
import { CircleCheck, CircleX, Loader, LoaderCircle } from 'lucide-react';
import { cn, log } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { ProfileEditFormValues } from './profile-edit-schema';
import userApi from '@/lib/api/user-api';
import { useDebounce } from '@/hooks/useDebounce';

const ProfileEditFormUsername = () => {

    const { register, watch, setError, clearErrors, getFieldState, formState } = useFormContext<ProfileEditFormValues>();
    const username = watch('username');
    const debouncedValue = useDebounce(username);

    const [isUsernameAvailable, setIsUsernameAvailable] = useState(!username);
    const [isPending, startTransition] = useTransition();

    const handleCheckUsernameAvailability = async (username: string) => {

        if (username.length < 3) {
            setIsUsernameAvailable(false);
            return;
        };

        try {

            const response = await userApi.checkUsernameAvailability(username?.trim() || '');

            console.log('checkUsernameAvailability response', response);

            const isAvailable = !!response?.data?.data?.available;

            setIsUsernameAvailable(isAvailable);

            if (!isAvailable) setError('username', { message: 'Username is not available' });


        } catch (error) {
            log('checkUsernameAvailability error', error);
        }
    };

    useEffect(() => {

        const { isDirty } = getFieldState('username', formState);

        if (!isDirty || !debouncedValue) return;

        startTransition(() => {
            handleCheckUsernameAvailability(debouncedValue);
        });
    }, [debouncedValue]);

    return (
        <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
            <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 starli.com/</span>
            <Input {...register('username')} id='username' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
            <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>

                {isPending ? <LoaderCircle className='stroke-[0.5] size-4 animate-spin text-primary-foreground/80' /> :
                    isUsernameAvailable ? <CircleCheck className='text-green-500 size-4' /> :
                        <CircleX className='text-red-500 size-4' />}

            </span>
        </div>
    );
};

export default ProfileEditFormUsername;