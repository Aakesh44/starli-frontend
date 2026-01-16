import React, { useRef } from 'react';
import PostContentInput from './post-form-content-input';
import { Editor } from '@tiptap/react'

type CreatePostBodyProps = {
    title: string;
    content: string;
    onTitleChange: (title: string) => void;
    onContentChange: (content: string) => void;
    maxContentLength?: number;
    onEditorReady: (editor: Editor) => void
};

const CreatePostBody = ({

    title, content, onTitleChange, onContentChange, maxContentLength, onEditorReady

}: CreatePostBodyProps) => {


    return (
        <form className='w-full grow flex flex-col bg-yellow-3000'>

            <input
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder='Title (optional)'
                className='h-10 w-full text-base font-medium outline-none'
            />

            <PostContentInput
                content={content}
                setContent={(value) => onContentChange(value)}
                limit={maxContentLength || 2000}
                onEditorReady={onEditorReady}
                placeholder='What are you thinking on?'
            />

        </form>
    );
};

export default CreatePostBody;