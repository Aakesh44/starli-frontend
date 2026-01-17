import React, { JSX } from 'react';

type Props = {
    title: string,
    icon: JSX.Element
};

const ProfileEditFormDivider = ({
    title, icon: Icon
}: Props) => {

    return (
        <div className='w-full flex items-center justify-center gap-4'>

            <span className='grow h-px bg-border/60' />

            <div className='flex items-center justify-center gap-2'>
                {Icon}
                <p className='font-semibold'>
                    {title}
                </p>
            </div>

            <span className='grow h-px bg-border/60' />

        </div>
    );
};

export default ProfileEditFormDivider;