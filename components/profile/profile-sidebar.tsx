import React from 'react';

const ProfileSidebar = () => {
    return (
        <div className=' h-auto lg:h-full w-full lg:w-86 grid md:grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col gap-3'>

            <div className='aspect-[5/2] md:aspect-[4/2] lg:aspect-[5/2] border border-border/60 rounded-md bg-white'>
                Streak
            </div>

            <div className='aspect-[5/2] md:aspect-[4/2] lg:aspect-[5/2] border border-border/60 rounded-md bg-white'>
                Badges
            </div>

            <div className='md:col-span-2 aspect-[5/2] md:aspect-[4/1] lg:aspect-[5/2] border border-border/60 rounded-md bg-white'>
                Social links
            </div>

            <div className='aspect-square lg:aspect-[11/12] border border-border/60 rounded-md bg-white'>
                Graph
            </div>

            <div className='aspect-square lg:aspect-[4/3] border border-border/60 rounded-md bg-white'>
                Profile highlight
            </div>
        </div>
    );
};

export default ProfileSidebar;