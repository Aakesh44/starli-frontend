import React from 'react';

interface CommentContentProps {
    content: string;
}
const CommentContent = ({ content }: CommentContentProps) => {
    return (
        <div className='w-full h-full font-sans flex flex-col items-start justify-start gap-2 bg-pink-2000'>

            <p
                dangerouslySetInnerHTML={{ __html: content }}
                className='text-sm text-primary-foreground'
            />

        </div>
    );
};

export default CommentContent;