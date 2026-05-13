import Image from 'next/image';
import React from 'react';
import sampleImage from '../../public/images/sample.jpg'
import { Comment } from '@/types/comment';


const CommentMedia = ({ media }: Pick<Comment, 'media'>) => {

    if (!media?.[0]?.url) return null;

    return (
        <div className='relative w-52 aspect-video grid grid-cols-1 bg-amber-3000 overflow-hidden'>
            <div className='relative '>
                <Image
                    src={media?.[0]?.url || sampleImage}
                    alt='image'
                    fill
                    quality={80}
                    className='w-full h-full min-h-16 max-h-96 object-scale-down border border-border rounded-xl '
                />

            </div>
        </div>
    );
};

export default CommentMedia;