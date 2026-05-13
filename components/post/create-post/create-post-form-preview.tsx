"use client";
import React, { useRef, useState } from 'react';
import { ProfileImageAvatar } from '../../ui/avatar';
import { ImagePlus, ListTodo } from 'lucide-react';
import { Button } from '../../ui/button';
import FlipSentences from '../../ui/flip-sentences';
import { SimpleTooltip } from '../../ui/tooltip';
import CreatePostForm from '../create-post/create-post-form';
import { SimpleDialog } from '../../ui/dialog';

interface CreatePostFormPreviewProps {
    element: React.ReactNode;
}

const CreatePostFormPreview = ({ element }: CreatePostFormPreviewProps) => {

    const [openPopup, setOpenPopup] = useState(false);
    const createPostFormRef = useRef<{ handleClosePopup: () => boolean }>(null);

    if (!element) return null;

    return (
        <SimpleDialog
            open={openPopup}
            onOpenChange={(nextOpen) => {
                if (!nextOpen) {
                    const canClose = createPostFormRef.current?.handleClosePopup();
                    if (!canClose) return;
                }
                setOpenPopup(nextOpen);
            }}
        >

            <SimpleDialog.Trigger>

                {element}

            </SimpleDialog.Trigger>

            <SimpleDialog.Content>
                <CreatePostForm
                    ref={createPostFormRef}
                    onSuccess={() => setOpenPopup(false)}
                />
            </SimpleDialog.Content>

        </SimpleDialog>
    );
};

export default CreatePostFormPreview;  