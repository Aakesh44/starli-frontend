import React from 'react';
import { Skeleton } from '../ui/skeleton';

const UsersListItemSkeleton = () => {
    return (
        <div className='w-full h-20 px-5 flex items-center justify-start gap-3 border-b border-b-border/60 hover:bg-slate-50'>

            <div className='grow min-w-0 h-full flex items-center justify-start gap-2 bg-pink-2000'>

                <Skeleton className='size-10 rounded-full' />

                <div className='h-full. grow min-w-0 flex flex-col gap-3'>
                    <Skeleton className='w-28 h-2' />
                    <Skeleton className='w-40 h-2' />
                </div>
            </div>

            <Skeleton className='w-20 h-6 rounded-sm' />

        </div>
    );
};

export default UsersListItemSkeleton;