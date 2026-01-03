import React from 'react';
import { Button } from '../ui/button';
import { CalendarClock, Trash2 } from 'lucide-react';
import { format } from 'date-fns'

interface PostScheduledListItemProps {
    scheduledTask: {
        id: number;
        title: string;
        description: string;
        scheduled_at: string;
    }
}

const PostScheduledListItem = ({ scheduledTask }: PostScheduledListItemProps) => {
    return (
        <div className='w-full h-20 shrink-0 font-sans flex items-center justify-start gap-2 bg-cyan-30'>

            <div className='grow min-w-0 h-full p-0 flex flex-col items-start justify-center gap-1 cursor-pointer hover:bg-secondary/80 bg-fuchsia-3000'>
                <p className='font-semibold '>{scheduledTask.title}</p>
                <p className='min-w-0 w-full max-w-full text-sm truncate'>{scheduledTask.description}</p>

                <p className='text-xs text-green-600 flex items-center justify-start gap-1'>
                    <span>
                        <CalendarClock className='size-4' />
                    </span>
                    {format(new Date(scheduledTask.scheduled_at), 'eeee • MMM d, yyyy • h:mm a')}
                </p>
            </div>

            <Button variant={"ghost"} size={"icon-xxs"} className={"text-destructive hover:text-destructive"}>
                <Trash2 />
            </Button>

        </div>
    );
};

export default PostScheduledListItem;