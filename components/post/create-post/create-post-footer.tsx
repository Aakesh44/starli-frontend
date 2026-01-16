import React from 'react';

type CreatePostFooterProps = {
    contentLength: number;
    maxContentLength: number;
};

const CreatePostFooter = ({
    contentLength, maxContentLength
}: CreatePostFooterProps) => {

    const contentProgress = (contentLength / maxContentLength) * 100;

    return (
        <div className='mt-auto h-3 w-full flex items-center justify-center gap-2 bg-lime-3000'>
            <div className='relative w-full h-0.5 bg-slate-100 rounded-full'>
                <span
                    className='block absolute top-0 left-0 h-full bg-black rounded-full transition-all duration-300 ease-in-out'
                    style={{
                        width: `${contentProgress}%`
                    }}
                />
            </div>
            <span className='text-xs text-secondary-foreground/70'>{maxContentLength - contentLength}</span>
        </div>
    );
};

export default CreatePostFooter;