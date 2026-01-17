import { TagIcon } from 'lucide-react';
import React from 'react';
import ChipInput from '../ui/chip-input';

const ProfileEditFormProfileTags = () => {
    return (
        <>

            <div className='w-full h-fit md:h-28 min-h-28 flex flex-col items-start justify-start gap-2 bg-cyan-2000'>
                <div className='w-full flex items-center justify-between'>

                    <p className='font-semibold w-full'>Search skills, tools, interests</p>
                    <span className='text-sm text-secondary-foreground whitespace-nowrap'>Upto 10</span>
                </div>

                <div className='w-full grow'>

                    <ChipInput />

                </div>


            </div>
        </>
    );
};

export default ProfileEditFormProfileTags;