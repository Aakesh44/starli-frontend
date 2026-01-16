"use client";
import React, { useRef, useState } from 'react';
import { ProfileImageAvatar } from '../../ui/avatar';
import { ImagePlus, ListTodo } from 'lucide-react';
import { Button } from '../../ui/button';
import FlipSentences from '../../ui/flip-sentences';
import { SimpleTooltip } from '../../ui/tooltip';
import CreatePostForm from '../create-post/create-post-form';
import { SimpleDialog } from '../../ui/dialog';

const CreatePostFormPreview = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const createPostFormRef = useRef<{ handleClosePopup: () => boolean }>(null);

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

                <div
                    className='w-full h-28 shrink-0 py-3 px-5 bg-slate-50 rounded-md rounded-b-none border-b border-border/60 hover:cursor-pointer'
                >

                    <div className='w-full h-1/2 flex items-center justify-start gap-2 bg-amber-300.'>

                        <ProfileImageAvatar
                            src={'./icons/star.png'}
                            alt={'profile'}
                            fallback={'A'}
                            className='size-10'
                        />

                        <div>
                            <FlipSentences
                                sentences={[
                                    "What are you building?",
                                    "Ask a question to the community?",
                                    "What you gonna teach?",
                                ]}
                            />
                        </div>
                    </div>

                    <div className='w-full h-1/2 pl-10 flex items-center justify-start gap-3 bg-pink-300.'>
                        <div className='h-full grow flex items-center justify-between bg-cyan-300.'>

                            <div className='bg-lime-300. h-full w-fit flex items-center justify-start gap-2'>

                                <SimpleTooltip content={"Add Image(s)"}>

                                    <Button variant={"ghost"} size={"icon-xxs"}>
                                        <ImagePlus />
                                    </Button>
                                </SimpleTooltip>

                                <SimpleTooltip content={"Make a Poll"}>

                                    <Button variant={"ghost"} size={"icon-xxs"}>
                                        <ListTodo />
                                    </Button>
                                </SimpleTooltip>
                            </div>

                            <div className='w-fit h-full flex items-center justify-center gap-2 bg-amber-300.'>
                                <Button variant={"default"} className='px-6 h-8'>Post</Button>
                            </div>
                        </div>
                    </div>

                </div>

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