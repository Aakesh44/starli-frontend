import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { Rocket } from 'lucide-react';
import React from 'react';

const StreakIcon = () => {
    return (
        <SimpleTooltip content={"Streak"}>

            <Button variant={"ghost"} size={"icon-sm"} className='hidden md:block group hover:bg-red-50.'>
                <Rocket className='size-5 group-hover:scale-[0.95] group-hover:text-red-500' />
            </Button>
        </SimpleTooltip>
    );
};

export default StreakIcon;