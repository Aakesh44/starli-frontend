import Image, { StaticImageData } from 'next/image';
import React from 'react';
import sampleImage from '../../../public/images/sample2.jpg';
import { Post } from '@/types/post';
import { cn } from '@/lib/utils';

type Props = {
    post: Post
}
const PostMedia = ({
    post
}: Props) => {

    const mediaLength: number = 3;

    return (
        <MediaLayout mediaLength={mediaLength}>

            {new Array(mediaLength).fill(0).map((media, index) => (

                <div
                    key={index}
                    className={cn(
                        'relative bg-yellow-3000',
                        mediaLength === 3 && index === 0 ? 'row-span-2' : '',
                    )}
                >

                    <MediaItem src={sampleImage} />

                </div>
            ))}
        </MediaLayout>
    )
    return (
        <div className='relative w-full h-full overflow-hidden'>
            <Image
                src={sampleImage}
                alt='image'
                // fill
                quality={80}
                className='w-full h-full min-h-40 max-h-96 object-cover border border-border rounded-xl '
            />
        </div>
    );
};

export default PostMedia;

type MediaLayoutProps = {
    mediaLength: number
    children: React.ReactNode
}

// mediaLayout.ts
export const mediaGridConfig: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-2 grid-rows-2',
    4: 'grid-cols-2 grid-rows-2',
};

const MediaLayout = ({
    mediaLength, children
}: MediaLayoutProps) => {
    return (
        <div
            className={cn(
                'w-full aspect-square grid gap-0.5 rounded-xl overflow-hidden',
                mediaGridConfig[mediaLength],

            )}
        >
            {children}
        </div>
    )
}

type MediaItemProps = {
    src: string | StaticImageData,
    isOverlay?: boolean
    overlayText?: string
}

const MediaItem = ({
    src, isOverlay, overlayText
}: MediaItemProps) => {
    return (
        <div className='relative w-full h-full overflow-hidden'>
            <Image
                src={src}
                alt='post media'
                fill
                quality={80}
                className='object-cover border'
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {isOverlay && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-semibold">
                    {overlayText}
                </div>
            )}
        </div>
    );
};

