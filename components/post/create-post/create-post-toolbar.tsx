import { Button } from '@/components/ui/button';
import { SimpleDropDownMenu } from '@/components/ui/dropdown-menu';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import EmojiPicker from 'emoji-picker-react';
import { ImagePlus, Info, ListTodo } from 'lucide-react';
import React from 'react';

type CreatePostToolbarProps = {
    error: string;
    onAddMedia: (files: File[]) => void;
    onAddEmoji: (emoji: string) => void;
};

const CreatePostToolbar = ({
    error,
    onAddMedia, onAddEmoji
}: CreatePostToolbarProps) => {
    return (
        <div className='mt-2 w-full h-10 flex items-center justify-start gap-2 bg-amber-4000'>

            <SimpleTooltip content={"Add Image(s)"}>

                <Button asChild variant={"ghost"} size={"icon-xxs"}>
                    <label htmlFor='post_media_input'>
                        <ImagePlus />
                    </label>
                </Button>

            </SimpleTooltip>

            <input
                type="file"
                multiple={true}
                accept='image/jpeg, image/png, image/gif, image/webp, image/avif, .gif'
                maxLength={4}
                id='post_media_input'
                hidden
                onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                        onAddMedia(Array.from(files));
                    }
                    e.target.value = '';
                }}
                className='hidden'
            />

            <SimpleTooltip content={"Make a Poll"}>

                <Button variant={"ghost"} size={"icon-xxs"}>
                    <ListTodo />
                </Button>

            </SimpleTooltip>

            <span className='h-3/5 w-px bg-border/60 rounded-full'></span>

            <SimpleDropDownMenu
                menuContent={
                    <EmojiPicker
                        allowExpandReactions={false}
                        previewConfig={{ showPreview: false }}
                        onEmojiClick={(emoji) => {
                            onAddEmoji(emoji.emoji);
                        }}
                    />
                }
            >

                <SimpleTooltip content={"Add Emoji"}>

                    <Button variant={"ghost"} size={"icon-xxs"}>
                        😀
                    </Button>

                </SimpleTooltip>

            </SimpleDropDownMenu>

            <p className={cn('ml-auto text-secondary-foreground text-xs font-medium', error ? 'text-destructive' : '')}>
                {error ? error : 'Type @ to mention someone'}
            </p>

            <SimpleTooltip content={"Content Guideline"}>

                <Button variant={"ghost"} size={"icon-xxs"}>
                    <Info className='size-3' />
                </Button>

            </SimpleTooltip>

        </div>
    );
};

export default CreatePostToolbar;