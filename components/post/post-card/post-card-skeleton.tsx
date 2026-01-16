import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const PostCardSkeleton = () => {
    return (
        <div className='group w-full h-fit shrink-0 p-5 pb-3 border-b border-border/60'>

            <div className='w-full h-12 flex items-center justify-start gap-2'>

                <Skeleton className='size-10 rounded-full' />

                <div className='h-full flex flex-col items-start justify-evenly'>

                    <Skeleton className='w-40 h-2' />

                    <Skeleton className='w-24 h-2' />

                </div>

            </div>

            <div className='w-full h-fit pt-2 pl-12 flex flex-col items-start justify-start gap-3'>

                <div className='w-full h-full font-sans flex flex-col items-start justify-start gap-2 bg-pink-2000'>

                    <Skeleton className='w-4/5 h-2' />

                    <Skeleton className='w-3/5 h-2' />

                    <Skeleton className='w-3/4 h-2' />

                    <Skeleton className='w-2/5 h-2' />

                    <Skeleton className='w-4/5 h-2' />
                </div>

                <div className='w-full h-10 flex items-center justify-between bg-lime-3000'>

                    <div className='h-full w-fit flex items-center justify-start gap-8'>

                        <div className='flex items-center gap-2'>

                            <Skeleton className='size-6 bg-slate-200/75' />

                            <Skeleton className='size-2 rounded-full bg-slate-200/75' />

                        </div>

                        <div className='flex items-center gap-2'>

                            <Skeleton className='size-6 bg-slate-200/75' />

                            <Skeleton className='size-2 rounded-full bg-slate-200/75' />

                        </div>

                        <div className='flex items-center gap-2'>

                            <Skeleton className='size-6 bg-slate-200/75' />

                            <Skeleton className='size-2 rounded-full bg-slate-200/75' />

                        </div>
                    </div>

                    <div className='w-fit h-full flex items-center justify-start gap-5'>

                        <Skeleton className='size-6 bg-slate-200/75' />

                        <Skeleton className='size-6 bg-slate-200/75' />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PostCardSkeleton;