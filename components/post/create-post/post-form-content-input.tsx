"use client";
import React, { useEffect } from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import PostContent from '../post-card/post-content';
import { cn } from '@/lib/utils';

interface PostContentInputProps {
    content: string;
    setContent: (content: string) => void;
    limit: number;
    placeholder?: string;
    className?: string
    onEditorReady?: (editor: Editor) => void
};

const PostContentInput = ({ content, setContent, placeholder, className, limit = 200, onEditorReady }: PostContentInputProps) => {


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
        onCreate: ({ editor }) => {
            onEditorReady?.(editor);
        },
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
        immediatelyRender: false,
        // autofocus: true,
        // This is how you style the editable area with Tailwind
        editorProps: {
            attributes: {
                class: cn('prose prose-sm text-sm focus:outline-none w-full min-h-48 h-fit max-h-62  overflow-y-auto p-0 scrollbar-thin', className),
            },
        },
    });

    // // 2. Synchronize external content changes
    // useEffect(() => {
    //     if (editor && content !== editor.getHTML()) {
    //         editor.commands.setContent(content);
    //     }
    // }, [content, editor]);

    if (!editor) return null;

    return (
        <EditorContent editor={editor} />
    );
};

export default PostContentInput;