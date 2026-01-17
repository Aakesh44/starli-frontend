import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    label: string,
    description: string,
    children: React.ReactNode
    id?: string,
    className?: string
};
const ProfileEditFormRow = ({
    label, description, id, children, className
}: Props) => {
    return (
        <div
            className={cn('w-full min-h-fit h-fit md:h-12 grid grid-cols-2 md:grid-cols-5 md:grid-rows-1  gap-3 bg-pink-2000', className)}
        >

            <div className='col-span-2 flex flex-col justify-start gap-0.5'>
                <label htmlFor={id} className='font-semibold'>{label}</label>
                <p>{description}</p>
            </div>

            <div className='col-span-3 h-full grid place-items-center'>

                {children}

            </div>

        </div>
    );
};

export default ProfileEditFormRow;