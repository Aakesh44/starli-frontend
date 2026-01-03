import React from 'react';
import LikeListItem from './like-list-item';

const LikeList = () => {
    return (
        <ul className='mt-5 w-full h-fit flex flex-col items-start justify-start'>

            {new Array(15).fill(0).map((_, index) => {
                return (
                    <LikeListItem key={index} />
                )
            })}
        </ul>
    );
};

export default LikeList;