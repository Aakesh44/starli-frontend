"use client";

import React, { useEffect, useState } from 'react';
import { DialogClose } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { CalendarIcon, Clock4, X } from 'lucide-react';
import { SimplePopover } from '../../ui/popover';
import { Calendar } from '../../ui/calendar'
import SchedulePostTimeSelector from './schedule-post-time-selector';
import { format, isToday } from 'date-fns';
import { SimpleSelect } from '../../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { conver12HourSlotTo24Hour } from '@/lib/date&timeUtils';
import { cn } from '@/lib/utils';

type SchedulePostFormProps = {
    type?: 'NEW' | 'EDIT';
    scheduledAt?: string;
    onScheduleTimeSelect: (date: Date) => void;
    onSchedulePost: () => void;
    onUnschedulePost?: () => void
};

const SchedulePostForm = ({
    type = 'NEW',
    scheduledAt,
    onScheduleTimeSelect,
    onSchedulePost,
    onUnschedulePost
}: SchedulePostFormProps) => {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [timeSlot, setTimeSlot] = useState("");

    const handleDateChange = (date: Date) => {

        setSelectedDate(date);
        setTimeSlot("");
    };

    const handleSlotSelect = (slot: string) => {

        console.log(`Selected slot: ${slot}`);

        const { hours, minutes } = conver12HourSlotTo24Hour(slot);

        const newDate = new Date(selectedDate);
        newDate.setHours(hours, minutes, 0, 0);

        setSelectedDate(newDate);

        // Notify parent component of the selected schedule time
        onScheduleTimeSelect(newDate);

        setTimeSlot(slot);
    };

    useEffect(() => {

        if (scheduledAt) {

            const date = new Date(scheduledAt);
            setSelectedDate(date);

            const slot = format(date, 'hh:mm a');
            setTimeSlot(slot);

        }

    }, [scheduledAt])

    return (
        <div className='w-[90dvw] md:w-[400px] min-h-56 h-fit flex flex-col items-start justify-start font-sans'>

            <div className='w-full p-4 flex items-center justify-between border-b border-border/60'>

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

                        <SimplePopover
                            popoverContent={
                                <Calendar
                                    disabled={{ before: new Date(), after: new Date(new Date().setDate(new Date().getDate() + 10)) }}
                                    mode="single"
                                    required
                                    selected={selectedDate}
                                    onSelect={handleDateChange}
                                    className='w-full border-0'

                                />
                            }
                        >

                            <Button variant={"ghost_fit"} className='group w-full text-base flex items-center justify-between bg-white border-border/60'>
                                <span>{isToday(selectedDate) ? 'Today' : format(selectedDate, 'dd-MM-yyyy')}</span>
                                <CalendarIcon className='text-secondary-foreground group-hover:text-foreground' />
                            </Button>

                        </SimplePopover>
                    </div>

                    <div className='bg-yellow-2000'>

                        <p className='font-medium'>Time</p>

                        <SimpleSelect
                            value={timeSlot}
                            onValueChange={(slot) => {
                                handleSlotSelect(slot)
                            }}
                            selectContent={
                                <SchedulePostTimeSelector
                                    selectedDate={selectedDate}
                                />
                            }
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

                {timeSlot && (

                    <div className='text-secondary-foreground'>
                        <p>Your post will be go live on</p>
                        <p className='text-xs text-foreground'>
                            {format(selectedDate, 'eeee • MMM d, yyyy • h:mm a • OOOO')}
                        </p>
                    </div>
                )}

            </div>

            <div className='mt-auto p-4 w-full flex items-center justify-between border-t border-border/60 bg-secondary/40'>
                <Button
                    onClick={onUnschedulePost}
                    variant={"default"}
                    disabled={type === 'NEW'}
                    className={cn('px-6 h-8 border-destructive bg-white text-destructive', type === 'NEW' && 'cursor-not-allowed')}
                >
                    Unschedule
                </Button>
                <Button
                    onClick={onSchedulePost}
                    variant={"default"}
                    className='px-6 h-8 border-border/60'>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default SchedulePostForm;