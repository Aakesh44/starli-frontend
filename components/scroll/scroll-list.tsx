import React from 'react';
import PostCard from '../post/post-card';

const ScrollList = () => {
    return (
        <ul className='h-grow min-h-fit w-full flex flex-col items-center justify-start'>

            {[...new Array(10)].map((_, index) => {
                return (
                    <PostCard key={index} />
                )
            })}

        </ul>
    );
};

export default ScrollList;