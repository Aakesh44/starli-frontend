import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, SimpleDialog } from '@/components/ui/dialog';
import { TriangleAlert, X } from 'lucide-react';
import React from 'react';

type SaveDraftPopupProps = {
    loading?: boolean;
    onSaveDraft: () => void;
    onDiscardDraft: () => void;
    onClose: () => void;
};

const SaveDraftPopup = ({
    loading, onSaveDraft, onDiscardDraft, onClose
}: SaveDraftPopupProps) => {
    return (
        <div className='relative font-sans w-110 flex flex-col gap-4'>

            <DialogClose onClick={onClose} className='absolute right-1 top-1'>
                <Button variant={"ghost"} size={"icon-xxs"} className='ml-auto p-1.5'>
                    <X className='size-4' />
                </Button>
            </DialogClose>

            <div className='h-52 w-full p-4 flex flex-col items-center justify-center gap-4'>

                <TriangleAlert className='size-10 stroke-[0.5] text-destructive/60' />

                <p className='text-lg font-semibold'>Discard this post?</p>

                <p className='text-center text-primary-foreground'>You can also save this as a draft and come back to edit and post it later.</p>

            </div>

            <div className='mt-auto p-4 w-full flex items-center justify-between border-t border-border/60 bg-secondary/40'>
                <Button onClick={onDiscardDraft} variant={"default"} className='px-6 h-8 border-destructive bg-white text-destructive'>
                    Discard
                </Button>
                <Button onClick={onSaveDraft} variant={"default"} className='px-6 h-8 border-border/60'>
                    Save Draft
                </Button>
            </div>
        </div>
    );
};

export default SaveDraftPopup;