import { Button } from '@/components/ui/button';
import { SimpleDialog } from '@/components/ui/dialog';
import { ChevronDown, ClockPlus, LoaderCircle, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import PostDraftsAndScheduledPopup from '../post-drafts-scheduled-popup';
import { SelectValue, SimpleSelect } from '@/components/ui/select';
import TagsDropDown from './create-post-tags-dropdown';
import SchedulePostForm from '../scheduled/schedule-post-form';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useSelectedEditorPost } from '@/hooks/posts/useSelectedEditorPost';

type CreatePostHeaderProps = {
    loading: boolean;
    onTagChange: (tag: string) => void;
    onCreatePost: () => void;
    onScheduleTimeSelect: (date: Date) => void;
    onSchedulePost: () => void;
    onClose: () => void;
};

const CreatePostHeader = ({
    loading, onTagChange, onCreatePost, onSchedulePost, onScheduleTimeSelect, onClose
}: CreatePostHeaderProps) => {

    const { data: selectedEditorPost } = useSelectedEditorPost();

    const [openScheduleForm, setOpenScheduleForm] = useState(false);
    const [openDraftAndScheduledPostPopup, setOpenDraftAndScheduledPostPopup] = useState(false);

    const handleSchedulePost = () => {
        onSchedulePost();
        setOpenScheduleForm(false);
    };

    useEffect(() => {

        if (!openDraftAndScheduledPostPopup) return;

        if (!selectedEditorPost?.post) return;

        setOpenDraftAndScheduledPostPopup(false);

    }, [selectedEditorPost?.post, openDraftAndScheduledPostPopup]);

    return (
        <div className='w-full h-12 shrink-0 flex items-center justify-between gap-2 bg-fuchsia-3000'>

            <Button variant={"ghost"} size={"icon-xxs"} onClick={onClose} className='h-8 aspect-square bg-white p-1.5 border-border/60'>
                <X className='size-4' />
            </Button>

            <SimpleDialog
                open={openDraftAndScheduledPostPopup}
                onOpenChange={(o) => setOpenDraftAndScheduledPostPopup(o)}
            >
                <SimpleDialog.Trigger>
                    <Button variant={"ghost"} size={"icon-xxs"} className='h-8 bg-white px-3 border-border/60'>
                        Drafts
                    </Button>
                </SimpleDialog.Trigger>
                <SimpleDialog.Content>
                    <PostDraftsAndScheduledPopup />
                </SimpleDialog.Content>
            </SimpleDialog>

            <SimpleSelect
                selectContent={<TagsDropDown />}
                onValueChange={(value) => onTagChange(value)}
                className='w-fit ml-auto border-0 shadow-none'
            >

                <Button asChild variant={"ghost"} size={"icon-xxs"} className='ml-auto w-full h-8 bg-white hover:bg-white px-3 rounded-lg border-border/60'>
                    <div className='text-foreground flex items-center justify-between gap-1'>
                        <SelectValue defaultValue={"# Ask"} placeholder='# Ask' />
                        <ChevronDown className='text-foreground' />
                    </div>
                </Button>

            </SimpleSelect>

            <SimpleDialog
                open={openScheduleForm}
                onOpenChange={setOpenScheduleForm}
            >

                <SimpleDialog.Trigger
                    onClick={() => setOpenScheduleForm(true)}
                >

                    <div className='px-2 pr-5 -mr-6 h-8 flex items-center rounded-lg border border-r-0 border-border/60 hover:border-border/60 hover:shadow'>
                        <SimpleTooltip content={"Schedule for later"}>

                            <Button variant={"ghost_no_hover"} size={"icon-xxs"}>
                                <ClockPlus />
                            </Button>

                        </SimpleTooltip>
                    </div>

                </SimpleDialog.Trigger>
                <SimpleDialog.Content>
                    <SchedulePostForm onSchedulePost={handleSchedulePost} onScheduleTimeSelect={onScheduleTimeSelect} />
                </SimpleDialog.Content>
            </SimpleDialog>


            <Button
                onClick={onCreatePost}
                variant={"default"}
                className='px-6 h-8 '
            >
                {loading ? <LoaderCircle /> : 'Post'}
            </Button>
        </div>
    );
};

export default CreatePostHeader;