"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { DialogClose } from '../ui/dialog';
import { X } from 'lucide-react';
import PostDraftsList from './post-drafts-list';
import PostScheduledList from './post-scheduled-list';
import { cn } from '@/lib/utils';

const options = ["DRAFTS", "SCHEDULED"] as const;

const PostDraftsAndScheduledPopup = () => {

    const [activeTab, setActiveTab] = useState<typeof options[number]>('DRAFTS');

    return (
        <div className="min-h-96 h-fit max-h-[50vh] md:min-w-[450px] w-[650px] p-3 font-sans flex flex-col gap-2 rounded-lg border shadow-md bg-white">

            <div className='w-full h-12 shrink-0 flex items-center justify-between gap-2 bg-fuchsia-3000'>

                <div className='relative w-62 h-10 p-1 flex items-center justify-center gap-1 shrink-0 border border-border rounded-lg overflow-hidden bg-yellow-2000'>

                    {options.map((option, ind) => {
                        return (
                            <Button
                                key={ind}
                                variant={"unstyled"}
                                onClick={() => setActiveTab(option)}
                                className={cn('z-20 bg-white. w-1/2 h-full text-secondary-foreground hover:text-primary-foreground', option === activeTab && 'text-primary-foreground')}
                            >
                                {option} • 2
                            </Button>
                        )
                    })}

                    <div
                        className='absolute inset-1 h-full. p-1 transition-transform duration-200 ease-in-out bg-secondary rounded-md'
                        style={{
                            width: `calc(50% - 4px)`,
                            transform: `translateX(${activeTab === "SCHEDULED" ? '100%' : '0%'})`,
                        }}
                    >
                        {/* <div className='w-full h-full bg-secondary rounded-md'>
                        </div> */}
                    </div>

                </div>


                <DialogClose>
                    <Button variant={"ghost"} size={"icon-xxs"} className='ml-auto bg-white p-1.5 border-border/60'>
                        <X className='size-4' />
                    </Button>
                </DialogClose>

            </div>

            {activeTab === "DRAFTS" ? (

                <PostDraftsList />
            ) : (

                <PostScheduledList />
            )}



        </div>
    );
};

export default PostDraftsAndScheduledPopup;