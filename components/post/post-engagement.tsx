import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ProfileImageAvatar } from '../ui/avatar';

const PostEngagements = () => {
    return (
        <div className='w-full h-8 flex items-center justify-between'>

            <Link href={'#'} className='h-8 shrink-0 w-fit text-xs font-normal text-slate-500 hover:underline flex items-center justify-start gap-1 hover:gap-1.5 transition-[gap] duration-200 bg-lime-3000'>

                <p>View all <span className='font-semibold'>10 comments</span></p>

                <MoveRight className='size-4' />

            </Link>

            <Link href={'#'} className='h-8 shrink-0 w-fit text-xs font-semibold text-slate-500 hover:underline flex items-center justify-start gap-1 bg-lime-3000'>

                <div className='flex items-center justify-center'>
                    {new Array(3).fill(0).map((_, index) => {
                        return (
                            <ProfileImageAvatar src='' alt='' key={index} className={`size-5 shrink-0 bg-gray-50 ${index == 0 ? '' : '-ml-1.5'} hover:z-10`} />
                        )
                    })}
                </div>

                <p>Vivek & 2 others <span className='font-normal'>upvoted</span></p>
            </Link>
        </div>
    );
};

export default PostEngagements;