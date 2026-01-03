import Image from 'next/image';
import React from 'react';
import sampleImage from '../../public/images/sample.jpg'

const PostMedia = () => {
    return (
        <div className='relative w-full h-auto grid grid-cols-1  overflow-hidden'>
            <div className='relative '>
                <Image
                    src={sampleImage}
                    alt='image'
                    // fill
                    quality={80}
                    className='w-full h-full min-h-40 max-h-96 object-cover border border-border rounded-xl '
                />

            </div>
        </div>
    );
};

export default PostMedia;