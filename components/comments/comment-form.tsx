"use client";
import React, { useState } from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { ArrowUp, ImagePlus, Smile, X } from 'lucide-react';
import { Input } from '../ui/input';
import PostContentInput from '../post/post-form-content-input';
import Image from 'next/image';
import sampleImage from '../../public/images/sample2.jpg'
import { cn } from '@/lib/utils';
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import EmojiPicker from 'emoji-picker-react';

type CommentFormProps = {

} & React.ComponentProps<'form'>;

const CommentForm = ({ className, ...props }: CommentFormProps) => {

    const [isFile, setIsFile] = useState(false);
    const [text, setText] = useState("");

    return (
        <form className={cn('w-full min-h-9 h-fit p-2 flex items-start justify-start gap-2 rounded-lg border border-border/60 bg-slate-50 hover:bg-white focus-within:bg-white', className)}>

            <ProfileImageAvatar
                src=''
                alt='A'
                fallback='A'
                className='size-7 shrink-0'
            />

            <div className={cn(
                'w-full h-fit flex items-end justify-start gap-2 bg-lime-2000',
                isFile ? 'flex-wrap' : 'flex-nowrap'
            )}
            >

                <div className='w-full min-w-0'>

                    <PostContentInput
                        content={text}
                        setContent={setText}
                        limit={1000}
                        className={cn('h-fit grow min-h-6 pt-px bg-pink-4000 whitespace-pre-wrap break-all')}
                    />

                </div>

                {isFile && (

                    <div className='relative size-14  border border-border/60 rounded-md'>
                        <Image
                            src={sampleImage}
                            alt={'file'}
                            fill
                            quality={100}
                            className='p-px object-scale-down rounded-md overflow-hidden'
                        />
                        <Button onClick={() => setIsFile(false)} variant={"ghost"} size={"icon-xxs"} className='absolute -top-1.5 -right-1.5 bg-white border-border/60 rounded-full hover:shadow-none'>
                            <X className='size-3.5' />
                        </Button>
                    </div>
                )}

                <div className='ml-auto w-fit h-7 shrink-0 flex items-center justify-center gap-2 bg-fuchsia-3000'>
                    <Button

                        onClick={() => setIsFile(p => !p)}
                        variant={"ghost"}
                        size={"icon-xxs"}
                        className=''

                    >
                        <ImagePlus />
                    </Button>

                    <SimpleDropDownMenu menuContent={<EmojiPicker allowExpandReactions={false} previewConfig={{ showPreview: false }} />}>
                        <Button variant={"ghost"} size={"icon-xxs"} className=''>
                            <Smile />
                        </Button>
                    </SimpleDropDownMenu>


                    <Button variant={"default"} size={"icon-xxs"} className='bg-foreground'>
                        <ArrowUp />
                    </Button>
                </div>

            </div>

        </form>
    );
};

export default CommentForm;