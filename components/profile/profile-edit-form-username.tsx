import React from 'react';
import { Input, inputVariants } from '../ui/input';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProfileEditFormUsername = () => {
    return (
        <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
            <span className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>🌠 starli.com/</span>
            <Input id='username' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
            <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                <CircleCheck className='text-green-500 size-4' />
                {/* <CircleX/> */}
            </span>
        </div>
    );
};

export default ProfileEditFormUsername;