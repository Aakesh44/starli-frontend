"use client";

import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import { DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';
import { CalendarIcon, Clock4, X } from 'lucide-react';
import { SimplePopover } from '../ui/popover';
import { Calendar } from '../ui/calendar'
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import SchedulePostTimeSelector from './schedule-post-time-selector';
import { format } from 'date-fns';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SimpleSelect } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';

const SchedulePostForm = () => {
    return (
        <div className='w-[90dvw] md:w-[400px] min-h-56 h-fit flex flex-col items-start justify-start font-sans'>

            <div className='w-full p-3 flex items-center justify-between border-b border-border/60'>

                <p className='text-lg font-semibold'>Schedule Post</p>

                <DialogClose>
                    <Button variant={"ghost"} size={"icon-xxs"} className='ml-auto bg-white p-1.5 border-border/60'>
                        <X className='size-4' />
                    </Button>
                </DialogClose>

            </div>

            <div className='w-full grow min-h-fit p-3 py-5 space-y-4 bg-lime-2000'>
                <div className='w-full h-full grid grid-cols-2 gap-3'>

                    <div className='bg-yellow-2000'>

                        <p className='font-medium'>Date</p>

                        <SimplePopover popoverContent={<Calendar className='w-full border-0' />}>

                            <Button variant={"ghost_fit"} className='group w-full text-base flex items-center justify-between bg-white border-border/60'>
                                <span>Today</span>
                                <CalendarIcon className='text-secondary-foreground group-hover:text-foreground' />
                            </Button>

                        </SimplePopover>
                    </div>

                    <div className='bg-yellow-2000'>

                        <p className='font-medium'>Time</p>

                        <SimpleSelect
                            selectContent={<SchedulePostTimeSelector />}
                            className='border-0 shadow-none'
                        >
                            <Button asChild variant={"ghost_fit"} className='group w-full text-foreground text-base flex items-center justify-between bg-white border-border/60'>
                                <div>
                                    <SelectValue placeholder='hh:mm' />
                                    <Clock4 className='text-secondary-foreground group-hover:text-foreground' />
                                </div>
                            </Button>

                        </SimpleSelect>
                    </div>

                </div>

                <div className='text-secondary-foreground'>
                    <p>Your post will be go live on</p>
                    <p className='text-xs text-foreground'>
                        {format(new Date(), 'eeee • MMM d, yyyy • h:mm a • OOOO')}
                    </p>
                </div>
            </div>

            <div className='mt-auto p-3 w-full flex items-center justify-between border-t border-border/60'>
                <Button variant={"default"} className='px-6 h-8 border-destructive bg-white text-destructive'>
                    Unschedule
                </Button>
                <Button variant={"default"} className='px-6 h-8 border-border/60'>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default SchedulePostForm;