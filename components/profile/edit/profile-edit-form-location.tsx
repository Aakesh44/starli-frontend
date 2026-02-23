import React from 'react';
import { SelectGroup, SelectItem, SimpleSelect } from '../../ui/select';
import { Button } from '../../ui/button';
import { cn } from '@/lib/utils';
import { inputVariants } from '../../ui/input';
import { SelectValue } from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';
import { ProfileEditFormValues } from './profile-edit-schema';
import SchedulePostTimeSelector from '../../post/scheduled/schedule-post-time-selector';

const LOCATIONS = [
    "Bengaluru, IN",
    "Pune, IN",
    "Delhi, IN",
    "Mumbai, IN",
    "Chennai, IN",
    "Kolkata, IN",

]
const ProfileEditFormLocation = () => {

    const { control } = useFormContext<ProfileEditFormValues>();

    return (
        <Controller
            name='location'
            control={control}
            render={({ field }) => (

                <SimpleSelect
                    selectContent={
                        <SelectGroup>
                            {LOCATIONS.map((location) => (
                                <SelectItem key={location} value={location}>
                                    {location}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    }
                    onValueChange={field.onChange}
                    value={field.value}
                >
                    <Button asChild variant={"ghost_fit"} className={cn(inputVariants(), 'group w-full h-10 text-primary-foreground bg-transparent. shadow-none')}>
                        <div className='w-full flex justify-between bg-red-3000'>
                            <SelectValue placeholder='Bengaluru, IN' />
                            <ChevronDown className='ml-auto text-secondary-foreground group-hover:text-foreground' />
                        </div>
                    </Button>

                </SimpleSelect>
            )}
        />
    );
};

export default ProfileEditFormLocation;