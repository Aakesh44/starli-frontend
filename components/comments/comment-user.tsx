import React from 'react';

const CommentUser = () => {
    return (
        <div className='w-full h-6 shrink-0 font-sans font-semibold flex items-center justify-start gap-2'>
            <p className=' text-primary-foreground'>Aakesh V M</p>
            <div className='w-fit text-slate-500 font-sans  text-xs font-normal flex items-center justify-start gap-1'>
                <p>48m</p>
                <p>•</p>
                <p>Author</p>
            </div>
        </div>
    );
};

export default CommentUser;