import Image from 'next/image';
import React from 'react';
import sampleImage from '../../public/images/sample.jpg'

const CommentMedia = () => {
    return (
        <div className='relative w-52 h-auto grid grid-cols-1  overflow-hidden'>
            <div className='relative '>
                <Image
                    src={sampleImage}
                    alt='image'
                    // fill
                    quality={80}
                    className='w-full h-full min-h-16 max-h-96 object-cover border border-border rounded-xl '
                />

            </div>
        </div>
    );
};

export default CommentMedia;