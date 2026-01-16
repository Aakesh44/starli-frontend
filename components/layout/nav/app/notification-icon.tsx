import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { Bell } from 'lucide-react';
import React from 'react';

const NotificationIcon = () => {
    return (
        <SimpleTooltip content={"Notifications"}>

            <Button variant={"ghost"} size={"icon-sm"} className='hidden md:block group hover:bg-amber-50.'>
                <Bell className='size-5 group-hover:scale-[0.95] group-hover:text-amber-500' />
            </Button>

        </SimpleTooltip>
    );
};

export default NotificationIcon;