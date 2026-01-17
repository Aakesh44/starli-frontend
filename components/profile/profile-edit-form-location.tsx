import React from 'react';
import { SimpleSelect } from '../ui/select';
import SchedulePostTimeSelector from '../post/scheduled/schedule-post-time-selector';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { inputVariants } from '../ui/input';
import { SelectValue } from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

const ProfileEditFormLocation = () => {
    return (
        <SimpleSelect
            selectContent={
                <SchedulePostTimeSelector
                    selectedDate={new Date()}
                />
            }
        >
            <Button asChild variant={"ghost_fit"} className={cn(inputVariants(), 'group w-full h-10 text-primary-foreground bg-transparent. shadow-none')}>
                <div className='w-full flex justify-between bg-red-3000'>
                    <SelectValue placeholder='Bengaluru, IN' />
                    <ChevronDown className='ml-auto text-secondary-foreground group-hover:text-foreground' />
                </div>
            </Button>

        </SimpleSelect>
    );
};

export default ProfileEditFormLocation;