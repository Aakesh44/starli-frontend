import React, { useMemo } from 'react';
import { SelectGroup, SelectItem } from '../../ui/select';
import { conver12HourSlotTo24Hour } from '@/lib/date&timeUtils';

const slots = [
    "12:00 AM",
    "12:15 AM",
    "12:30 AM",
    "12:45 AM",
    "01:00 AM",
    "01:15 AM",
    "01:30 AM",
    "01:45 AM",
    "02:00 AM",
    "02:15 AM",
    "02:30 AM",
    "02:45 AM",
    "03:00 AM",
    "03:15 AM",
    "03:30 AM",
    "03:45 AM",
    "04:00 AM",
    "04:15 AM",
    "04:30 AM",
    "04:45 AM",
    "05:00 AM",
    "05:15 AM",
    "05:30 AM",
    "05:45 AM",
    "06:00 AM",
    "06:15 AM",
    "06:30 AM",
    "06:45 AM",
    "07:00 AM",
    "07:15 AM",
    "07:30 AM",
    "07:45 AM",
    "08:00 AM",
    "08:15 AM",
    "08:30 AM",
    "08:45 AM",
    "09:00 AM",
    "09:15 AM",
    "09:30 AM",
    "09:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "01:00 PM",
    "01:15 PM",
    "01:30 PM",
    "01:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM",
    "05:15 PM",
    "05:30 PM",
    "05:45 PM",
    "06:00 PM",
    "06:15 PM",
    "06:30 PM",
    "06:45 PM",
    "07:00 PM",
    "07:15 PM",
    "07:30 PM",
    "07:45 PM",
    "08:00 PM",
    "08:15 PM",
    "08:30 PM",
    "08:45 PM",
    "09:00 PM",
    "09:15 PM",
    "09:30 PM",
    "09:45 PM",
    "10:00 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
    "11:00 PM",
    "11:15 PM",
    "11:30 PM",
    "11:45 PM",
];

type SchedulePostTimeSelectorProps = {
    selectedDate: Date;
};

const SchedulePostTimeSelector = ({
    selectedDate,
}: SchedulePostTimeSelectorProps) => {

    const availableSlots = useMemo(() => {

        return slots.filter((slot) => {

            const { hours, minutes } = conver12HourSlotTo24Hour(slot);

            const slotDate = new Date(selectedDate);
            slotDate.setHours(hours, minutes, 0, 0);

            return slotDate > new Date();
        });

    }, []);

    return (
        <SelectGroup
            className='w-44 max-h-60 p-1 text-xs font-medium font-sans text-secondary-foreground. bg-white overflow-y-auto scrollbar-thin'
            style={{
                scrollbarWidth: 'none'
            }}
        >

            {[...availableSlots].map((slot, index) => {
                return (

                    <SelectItem
                        key={index}
                        value={slot}
                        onSelect={() => console.log('Selected slot:', slot)}
                        className='px-3 py-2 cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'
                    >
                        {slot}
                    </SelectItem>
                )
            })}
        </SelectGroup>
    );
};

export default SchedulePostTimeSelector;