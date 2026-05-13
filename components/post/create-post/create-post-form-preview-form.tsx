"use client";
import { ProfileImageAvatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import FlipSentences from '@/components/ui/flip-sentences';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useOpenNewPostForm } from '@/stores/useOpenNewPostForm';
import { ImagePlus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react';

const CreatePostFormPreviewForm = () => {

    const { data: session } = useSession();
    const { openForm } = useOpenNewPostForm();

    return (
        <div
            onClick={() => openForm()}
            className='w-full h-28 shrink-0 py-3 px-5 bg-slate-50 rounded-md rounded-b-none border-b border-border/60 hover:cursor-pointer'
        >

            <div className='w-full h-1/2 flex items-center justify-start gap-2 bg-amber-300.'>

                <ProfileImageAvatar
                    src={session?.user?.picture?.url ?? './icons/star.png'}
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

                        <span className='h-1/2 w-px bg-border/60 rounded-full'></span>


                        <SimpleTooltip content={"Add Image(s)"}>

                            <Button variant={"ghost"} size={"icon-xxs"}>
                                😀
                            </Button>
                        </SimpleTooltip>

                        {/* <SimpleTooltip content={"Make a Poll"}>

                                    <Button variant={"ghost"} size={"icon-xxs"}>
                                        <ListTodo />
                                    </Button>
                                </SimpleTooltip> */}
                    </div>

                    <div className='w-fit h-full flex items-center justify-center gap-2 bg-amber-300.'>
                        <Button variant={"default"} className='px-6 h-8'>Post</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreatePostFormPreviewForm;