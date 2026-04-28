"use client";
import React, { useRef, useState } from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { ArrowUp, ImagePlus, Smile, X } from 'lucide-react';
import { Input } from '../ui/input';
import PostContentInput from '../post/create-post/post-form-content-input';
import Image from 'next/image';
import sampleImage from '../../public/images/sample2.jpg'
import { cn } from '@/lib/utils';
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import EmojiPicker from 'emoji-picker-react';
import commentApi, { CommentTargetType } from '@/lib/api/comment-api';
import { Editor } from '@tiptap/react';
import { useCreateComment } from '@/hooks/comment/use-create-comment';
import { useCreateCommentReply } from '@/hooks/comment/use-reply-comment';

type CommentFormProps = {
    targetId?: string,
    targetType?: CommentTargetType,
    parentId?: string,
    commentType: 'COMMENT' | 'REPLY',
    onSuccess?: () => void;
} & React.ComponentProps<'form'>;

const CommentForm = ({ targetId, targetType, parentId, commentType, className, onSuccess, ...props }: CommentFormProps) => {

    const contentRef = useRef<Editor>(null);

    const { mutate: handleCreateComment, isPending: isPendingCreate, isError, error } = useCreateComment({
        targetId: targetId || '',
        targetType: targetType || 'POST',
    });

    const { mutate: handleCreateReply, isPending: isPendingReply } = useCreateCommentReply({
        parentId: parentId || '',
        targetId: targetId || '',
        targetType: targetType || 'POST',
        limit: 3
    });

    const [file, setFile] = useState<File | null>(null);
    const filePreview = {
        file,
        url: file ? URL.createObjectURL(file) : null
    };
    const isFileSelected = Boolean(file);
    const [text, setText] = useState("");

    const handleUpdateContent = (content: string) => {
        contentRef?.current?.commands.setContent(content);
    };

    const handleSendComment = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        let res;

        if (commentType === 'COMMENT') {

            if (!targetId || !targetType) return;

            res = handleCreateComment({
                content: text,
                media: file ? [file] : [],
            });
        }
        else {

            console.log('Creating reply with content:', text, 'and file:', file, 'for parentId:', parentId);

            if (!parentId) return;

            res = handleCreateReply({
                content: text,
                media: file ? [file] : [],
            });

        }

        handleUpdateContent('');
        setFile(null);

        onSuccess?.();
    };

    return (
        <form
            onSubmit={handleSendComment}
            className={cn('w-full min-h-9 h-fit p-2 flex items-start justify-start gap-2 rounded-lg border border-border/60 bg-slate-50 hover:bg-white focus-within:bg-white', className)}
            {...props}
        >

            <ProfileImageAvatar
                src=''
                alt='A'
                fallback='A'
                className='size-7 shrink-0'
            />

            <div className={cn(
                'w-full h-fit flex items-end justify-start gap-2 bg-lime-2000',
                (isFileSelected || text.length > 7) ? 'flex-wrap' : 'flex-nowrap'
            )}
            >

                <div className={`${text.length ? 'w-full,' : 'grow,'} ' w-full min-w-0'`}>

                    <PostContentInput
                        content={text}
                        setContent={setText}
                        limit={1000}
                        placeholder='Write a comment...'
                        onEditorReady={(e) => contentRef.current = e}
                        className={cn('h-fit grow min-h-6 pt-px bg-pink-4000 whitespace-pre-wrap break-all')}
                    />

                </div>

                {isFileSelected && (

                    <div className='relative size-14  border border-border/60 rounded-md'>
                        <Image
                            src={filePreview.url || ''}
                            alt={filePreview.file?.name || ''}
                            fill
                            quality={100}
                            className='p-px object-scale-down rounded-md overflow-hidden'
                        />
                        <Button onClick={() => setFile(null)} variant={"ghost"} size={"icon-xxs"} className='absolute -top-1.5 -right-1.5 size-5 bg-white border-border/60 rounded-full hover:shadow-none'>
                            <X className='size-full' />
                        </Button>
                    </div>
                )}

                <div className='ml-auto w-fit h-7 shrink-0 flex items-center justify-center gap-2 bg-fuchsia-3000'>
                    <Button
                        asChild
                        variant={"ghost"}
                        size={"icon-xxs"}
                        className=''
                    >
                        <label htmlFor="post_comment_media">
                            <ImagePlus />
                        </label>
                    </Button>

                    <input
                        type="file"
                        multiple={true}
                        accept='image/jpeg, image/png, image/gif, image/webp, image/avif, .gif'
                        maxLength={4}
                        id='post_comment_media'
                        hidden
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFile(file);
                            }
                            e.target.value = '';
                        }}
                        className='hidden'
                    />

                    <SimpleDropDownMenu
                        menuContent={
                            <EmojiPicker
                                onEmojiClick={(e) => {
                                    contentRef?.current
                                        ?.chain()
                                        .focus()
                                        .insertContent(e.emoji)
                                        .run();
                                }}
                                allowExpandReactions={false}
                                previewConfig={{ showPreview: false }}
                            />
                        }
                    >
                        <Button variant={"ghost"} size={"icon-xxs"} className=''>
                            <Smile />
                        </Button>
                    </SimpleDropDownMenu>


                    <Button type='submit' variant={"default"} size={"icon-xxs"} className='bg-foreground'>
                        <ArrowUp />
                    </Button>
                </div>

            </div>

        </form>
    );
};

export default CommentForm;