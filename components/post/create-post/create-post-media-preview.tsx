import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type CreatePostMediaPreviewProps = {
    files: File[];
    onRemoveFile: (index: number) => void;
}

const CreatePostMediaPreview = ({
    files, onRemoveFile
}: CreatePostMediaPreviewProps) => {

    const imageWithPreviews = files.map((file, index) => {
        const url = URL.createObjectURL(file);
        return { file, url, index };
    });

    if (imageWithPreviews.length == 0) {
        return null;
    }

    return (
        <div className='min-h-16 h-fit w-full my-2 flex items-center justify-start gap-2 flex-wrap'>
            {imageWithPreviews.map(({ file, url, index }) => {
                return (
                    <div
                        key={index}
                        className='relative size-14 shrink-0 rounded-md border border-border/40 shadow-xs'
                    >
                        <Image
                            src={url}
                            alt={file.name}
                            className='object-cover rounded-md'
                            fill
                        />

                        <Button
                            size={"icon-xxs"}
                            onClick={() => onRemoveFile(index)}
                            className='absolute -top-1.5 -right-1.5 size-4 p-1 shrink-0 bg-white border-border/40 text-foreground rounded-full'
                        >
                            <X className='size-2.5' />
                        </Button>

                    </div>
                )
            })}
        </div>
    );
};

export default CreatePostMediaPreview;