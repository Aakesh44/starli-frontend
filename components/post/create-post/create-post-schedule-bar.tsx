import { SimpleDialog } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { PencilLine } from 'lucide-react';
import React from 'react';
import SchedulePostForm from '../scheduled/schedule-post-form';

type CreatePostScheduleBarProps = {
    scheduledAt?: string,
    onScheduleTimeSelect: (date: Date) => void;
    onSchedulePost: () => void;
    onUnschedulePost?: () => void
};
const CreatePostScheduleBar = ({
    scheduledAt, onScheduleTimeSelect, onSchedulePost, onUnschedulePost
}: CreatePostScheduleBarProps) => {

    if (!scheduledAt) return null;

    return (

        <SimpleDialog>
            <SimpleDialog.Trigger>

                <button className='py-2 flex items-center justify-start gap-1 text-xs text-primary-foreground cursor-pointer'>
                    <p>
                        Your post will be go live on {" "}
                        <span className='font-semibold'>
                            {format(new Date(scheduledAt), 'eee • MMM d, yyyy • h:mm a • OOOO')}
                        </span>
                    </p>
                    <PencilLine className='size-4' />
                </button>
            </SimpleDialog.Trigger>
            <SimpleDialog.Content>
                <SchedulePostForm
                    type='EDIT'
                    scheduledAt={scheduledAt}
                    onScheduleTimeSelect={onScheduleTimeSelect}
                    onSchedulePost={onSchedulePost}
                    onUnschedulePost={onUnschedulePost}
                />
            </SimpleDialog.Content>
        </SimpleDialog>

    );
};

export default CreatePostScheduleBar;