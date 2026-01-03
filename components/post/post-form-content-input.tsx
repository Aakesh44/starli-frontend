"use client";
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import PostContent from './post-content';
import { cn } from '@/lib/utils';

interface PostContentInputProps {
    content: string;
    setContent: (content: string) => void;
    limit: number;
    placeholder?: string;
    className?: string
};

const PostContentInput = ({ content, setContent, placeholder, className, limit = 200 }: PostContentInputProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: placeholder || 'What is happening?',
            }),
            CharacterCount.configure({
                limit,
            }),
        ],

        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML().replace(/<[^>]*>/g, ""));
        },
        immediatelyRender: false,
        // autofocus: true,
        // This is how you style the editable area with Tailwind
        editorProps: {
            attributes: {
                class: cn('prose prose-sm text-sm focus:outline-none w-full min-h-48 h-fit max-h-62  overflow-y-auto p-0 scrollbar-thin', className),
            },
        },
    })

    if (!editor) return null;
    return (
        <EditorContent editor={editor} />
    );
};

export default PostContentInput;