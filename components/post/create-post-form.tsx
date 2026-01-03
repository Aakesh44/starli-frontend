"use client";

import React, { useEffect, useRef, useState } from 'react';
import { CommandDialog } from '../ui/command';
import { Dialog, SimpleDialog } from '../ui/dialog';
import { Button } from '../ui/button';
import { ChevronDown, ClockPlus, ImagePlus, Info, ListTodo, X } from 'lucide-react';
import PostContentInput from './post-form-content-input';
import { SimpleTooltip } from '../ui/tooltip';
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import TagsDropDown from './create-post-tags-dropdown';
import EmojiPicker from 'emoji-picker-react';
import PostDraftsPopup from './post-drafts-scheduled-popup';
import PostDraftsAndScheduledPopup from './post-drafts-scheduled-popup';
import SchedulePostForm from './schedule-post-form';

const MAX_DESCRIPTION_LENGTH = 2000;

const CreatePostForm = ({ closePopup }: { closePopup: () => void }) => {

    const [text, setText] = useState("");

    return (
        <div className="min-h-96 h-fit max-h-[50vh] md:min-w-[450px] w-[90dvw] md:w-[650px] p-3 font-sans flex flex-col rounded-lg border shadow-md bg-white">

            <div className='w-full h-12 shrink-0 flex items-center justify-between gap-2 bg-fuchsia-3000'>

                <Button variant={"ghost"} size={"icon-xxs"} onClick={closePopup} className='bg-white p-1.5 border-border/60'>
                    <X className='size-4' />
                </Button>

                <SimpleDialog dialogContent={<PostDraftsAndScheduledPopup />}>
                    <Button variant={"ghost"} size={"icon-xxs"} className='bg-white px-3 border-border/60'>
                        Drafts
                    </Button>
                </SimpleDialog>


                <SimpleDropDownMenu menuContent={<TagsDropDown />}>

                    <Button variant={"ghost"} size={"icon-xxs"} className='ml-auto bg-white px-3 flex items-center justify-between border-border/60'>
                        <span># Ask</span>
                        <ChevronDown />
                    </Button>

                </SimpleDropDownMenu>

                <SimpleDialog dialogContent={<SchedulePostForm />}>

                    <div className='px-2 pr-5 -mr-6 h-8 flex items-center rounded-lg border border-border/60 hover:border-border/60 hover:shadow'>
                        <SimpleTooltip content={"Schedule for later"}>

                            <Button variant={"ghost_no_hover"} size={"icon-xxs"}>
                                <ClockPlus />
                            </Button>

                        </SimpleTooltip>
                    </div>
                </SimpleDialog>


                <Button variant={"default"} className='px-6 h-8 border-border/60'>
                    Post
                </Button>
            </div>

            <form className='w-full grow flex flex-col bg-yellow-3000'>

                <input
                    type="text"
                    placeholder='Title (optional)'
                    className='h-10 w-full text-base font-medium outline-none'
                />

                <PostContentInput
                    content={text}
                    setContent={setText}
                    limit={MAX_DESCRIPTION_LENGTH}
                    placeholder='What are you thinking on?'
                />

            </form>

            <div className='mt-auto h-3 w-full flex items-center justify-center gap-2 bg-lime-3000'>
                <div className='relative w-full h-0.5 bg-slate-100 rounded-full'>
                    <span
                        className='block absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300 ease-in-out'
                        style={{
                            width: `${(text.length / MAX_DESCRIPTION_LENGTH) * 100}%`
                        }}
                    />
                </div>
                <span className='text-xs text-secondary-foreground/70'>{MAX_DESCRIPTION_LENGTH - text.length}</span>
            </div>

            <div className='mt-2 w-full h-10 flex items-center justify-start gap-2 bg-amber-4000'>

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

                <span className='h-3/5 w-px bg-border/60 rounded-full'></span>

                <SimpleDropDownMenu menuContent={<EmojiPicker allowExpandReactions={false} previewConfig={{ showPreview: false }} />}>

                    <SimpleTooltip content={"Add Emoji"}>

                        <Button variant={"ghost"} size={"icon-xxs"}>
                            😀
                        </Button>

                    </SimpleTooltip>
                </SimpleDropDownMenu>

                <p className='ml-auto text-secondary-foreground text-xs font-medium'>Type @ to mention someone</p>

                <SimpleTooltip content={"Content Guideline"}>

                    <Button variant={"ghost"} size={"icon-xxs"}>
                        <Info className='size-3' />
                    </Button>

                </SimpleTooltip>

            </div>

        </div>
    );
};

export default CreatePostForm;