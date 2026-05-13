import React from 'react';
import { Skeleton } from '../ui/skeleton';

const CommandItemSkeleton = () => {
    return (
        <div className='w-full h-fit flex items-start justify-start gap-2 bg-amber-3000'>

            <Skeleton className='size-9 rounded-full shrink-0' />

            <div className='w-full h-fit space-y-3'>
                <Skeleton className='w-40 h-2' />
                <Skeleton className='w-24 h-2' />

                <div className='flex items-center justify-start gap-3'>
                    <Skeleton className='w-1/8 h-4' />
                    <Skeleton className='w-1/8 h-4' />
                    <Skeleton className='w-1/12 h-4' />
                </div>
            </div>
        </div>
    );
};

export default CommandItemSkeleton;