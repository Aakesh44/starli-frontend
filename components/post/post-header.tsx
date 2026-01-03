import React from 'react';
import { ProfileImageAvatar } from '../ui/avatar';
import PostMetaInfo from './post-metainfo';
import PostUser from './post-user';

const PostHeader = () => {
    return (
        <div className='w-full h-12 flex items-center justify-start gap-2 bg-amber-3000'>

            <ProfileImageAvatar
                src=''
                alt='profile'
                fallback='A'
                className='size-10'
            />

            <div className='h-full flex flex-col items-start justify-center text-sm font-medium text-secondary-foreground bg-lime-2000'>

                <PostUser />
                <PostMetaInfo />

            </div>
        </div>
    );
};

export default PostHeader;