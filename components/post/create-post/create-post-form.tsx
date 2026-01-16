"use client";

import React, { useEffect, useImperativeHandle, useRef, useState, useTransition } from 'react';
import { log } from '@/lib/utils';
import { createPost, PostSubmitStatus, updatePost } from '@/lib/api/post-api';
import CreatePostHeader from './create-post-header';
import CreatePostBody from './create-post-body';
import CreatePostFooter from './create-post-footer';
import CreatePostToolbar from './create-post-toolbar';
import { toast } from 'sonner';
import CreatePostMediaPreview from './create-post-media-preview';
import SaveDraftPopup from '../draft/save-draft-popup';
import { SimpleDialog } from '@/components/ui/dialog';
import { capitalize } from '@/lib/stringUtils';
import { clearSelectedEditorPost, useSelectedEditorPost } from '@/hooks/posts/useSelectedEditorPost';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import CreatePostScheduleBar from './create-post-schedule-bar';
import { useUpdateDraftsAndScheduledPosts } from '@/hooks/posts/useDraftsAndScheduledPosts';
import { useDeleteDraft } from '@/hooks/posts/useDeleteDraft';
import { useDeleteScheduledPost } from '@/hooks/posts/useDeleteScheduledPost';
import { Editor } from '@tiptap/react';
import { cleanHtmlContent } from '../../../lib/stringUtils';
import { prepareFlightRouterStateForRequest } from 'next/dist/client/flight-data-helpers';
import { postsKeys, prependPostToInfiniteData } from '@/hooks/posts/useInfinitePosts';
import { Post } from '@/types/post';

type PostFormState = {
    id?: string;
    title: string;
    content: string;
    tag: string;
    media: File[];
    scheduledAt?: string; // UTC timestamp
    type: 'NEW' | 'EDIT';
};

const params = {
    author: undefined,
    q: undefined,
    tag: undefined,
    filter: "ALL",
    limit: 5,
};

const MAX_CONTENT_LENGTH = 2000;

const CreatePostForm = React.forwardRef(({ onSuccess }: { onSuccess: () => void }, ref) => {

    const queryClient = useQueryClient();
    const { data: selectedEditorPost } = useSelectedEditorPost();
    const updatePostDraftsAndScheduled = useUpdateDraftsAndScheduledPosts();
    const { mutate: handleDeleteDraftPost } = useDeleteDraft();
    const { mutate: handleDeleteScheduledPost } = useDeleteScheduledPost();

    const [loading, startTransition] = useTransition();
    const [error, setError] = useState<string>("");
    const [openSaveDraftPopup, setOpenSaveDraftPopup] = useState(false);


    const contentRef = useRef<Editor>(null);
    const [postForm, setPostForm] = useState<PostFormState>({
        title: '',
        content: '',
        tag: '#Ask',
        media: [],
        type: 'NEW',
    });

    const handleUpdateContent = (content: string) => {
        contentRef?.current?.commands.setContent(content);
    }

    const updatePostForm = (patch: Partial<PostFormState>) => {
        setPostForm((prev) => ({
            ...prev,
            ...patch,
        }));
        setError("");
    }

    const resetForm = () => {
        setPostForm({
            title: '',
            content: '',
            tag: '#Ask',
            media: [],
            type: 'NEW',
        });
        handleUpdateContent('');
        setError("");
    };

    const submitPost = async (status: PostSubmitStatus) => {

        let response;

        if (postForm.type === 'EDIT') {
            if (!postForm.id) return;
            response = await updatePost(postForm.id, { ...postForm, id: postForm.id, content: cleanHtmlContent(postForm.content), status: status });
            toast.success(`Post ${capitalize(status)} successfully!`);
        }
        else {
            response = await createPost({ ...postForm, content: cleanHtmlContent(postForm.content), status: status });
            toast.success(`Post ${capitalize(status)} successfully!`);
        }

        const newPost: Post = response?.data?.post;

        // 🔥 PREPEND INTO FEED
        if (newPost?.status === "PUBLISHED") {
            console.log('🔥🔥 prependPostToInfiniteData');
            queryClient.setQueryData(
                postsKeys.list(params),
                (oldData: InfiniteData<any>) => {
                    console.log('checking oldData', oldData);
                    if (!oldData) return oldData;
                    console.log('oldData', oldData);
                    return prependPostToInfiniteData(oldData, newPost);
                }
            )
        }


        updatePostDraftsAndScheduled(response?.data?.post);

        resetForm();
        onSuccess();

    }

    const canCreatePost = () => {
        return postForm.content.trim().length > 0 || postForm.media.length > 0;
    }

    const handleSubmitPost = () => {

        if (!canCreatePost()) {
            setError("Post content cannot be empty.");
            return;
        };

        startTransition(async () => {

            try {

                await submitPost("PUBLISHED");

            } catch (error) {
                log('create Post error', error);
            }
        });
    }

    const canSaveDraft = () => {
        return postForm.content.trim().length > 0 || postForm.media.length > 0;
    }

    const handleSaveDraft = () => {

        if (!canSaveDraft()) {
            setError("Post content cannot be empty.");
            return;
        };

        startTransition(async () => {

            try {

                await submitPost("DRAFT");

            } catch (error) {
                log('draft Post error', error);
            }
        });

    }

    const canSchedulePost = () => {

        let result = {
            ok: true,
            message: ""
        };

        if (!(postForm.content.trim().length > 0 || postForm.media.length > 0)) {
            result = {
                ok: false,
                message: "Post content cannot be empty."
            };
            return result;
        }
        else if (!postForm.scheduledAt || new Date(postForm.scheduledAt) <= new Date()) {
            result = {
                ok: false,
                message: "Oops! U missed the slot, pick a future time."
            };
            return result;
        }

        return result;
    };

    const handleSchedulePost = () => {

        const canSchedule = canSchedulePost();

        if (!canSchedule.ok) {
            setError(canSchedule.message);
            return;
        }

        startTransition(async () => {
            try {

                await submitPost("SCHEDULED");

            } catch (error) {
                log('schedule Post error', error);
            }
        });
    }

    const handleDiscardDraft = () => {

        if (postForm.type === 'EDIT' && postForm.id) {
            handleDeleteDraftPost(postForm.id);
            handleDeleteScheduledPost(postForm.id);
        }

        resetForm();
        setOpenSaveDraftPopup(false);
        onSuccess();
    };

    const handleUnschedulePost = () => {

        if (postForm.type === 'EDIT' && postForm.id) {
            handleDeleteScheduledPost(postForm.id);
        }

        resetForm();
        setOpenSaveDraftPopup(false);
        onSuccess();
    }

    function handleClosePopup() {

        // You can add logic here to check for unsaved changes

        if (postForm.content.length > 0 || postForm.media.length > 0) {
            setOpenSaveDraftPopup(true);
            return false;
        };

        resetForm();
        setOpenSaveDraftPopup(false);
        onSuccess();
        return true;
    };

    useImperativeHandle(ref, () => ({
        handleClosePopup
    }));

    useEffect(() => {

        if (!selectedEditorPost?.post) return;

        const editorPost = selectedEditorPost?.post;

        setPostForm({
            id: editorPost?.id,
            content: editorPost?.content,
            media: [],
            scheduledAt: editorPost?.scheduledAt,
            tag: editorPost?.tag,
            title: editorPost?.title,
            type: 'EDIT'
        });

        handleUpdateContent(editorPost?.content);

        // Clear the selected draft
        clearSelectedEditorPost(queryClient);

    }, [selectedEditorPost]);


    return (
        <div className="min-h-96 h-fit  md:min-w-[450px] w-[90dvw] md:w-[650px] p-3 font-sans flex flex-col rounded-lg shadow-md bg-white">

            <CreatePostHeader
                loading={loading}
                onTagChange={(tag) => updatePostForm({ tag })}
                onCreatePost={handleSubmitPost}
                onSchedulePost={handleSchedulePost}
                onScheduleTimeSelect={(date) => { updatePostForm({ scheduledAt: date?.toUTCString() }) }}
                onClose={handleClosePopup}
            />

            <CreatePostBody
                title={postForm.title}
                content={postForm.content}
                onTitleChange={(title) => updatePostForm({ title })}
                onContentChange={(content) => updatePostForm({ content })}
                maxContentLength={MAX_CONTENT_LENGTH}
                onEditorReady={(editor) => { contentRef.current = editor }}
            />

            <CreatePostMediaPreview
                files={postForm.media}
                onRemoveFile={(ind) => {
                    const newMedia = [...postForm.media];
                    newMedia.splice(ind, 1);
                    updatePostForm({ media: newMedia });
                }}
            />

            <CreatePostFooter
                contentLength={postForm.content?.replace(/<[^>]*>/g, "").length}
                maxContentLength={MAX_CONTENT_LENGTH}
            />

            <CreatePostScheduleBar
                scheduledAt={postForm.scheduledAt}
                onScheduleTimeSelect={(date) => {
                    updatePostForm({ scheduledAt: date?.toUTCString() })
                }}
                onSchedulePost={handleSchedulePost}
                onUnschedulePost={handleUnschedulePost}
            />

            <CreatePostToolbar
                error={error}
                onAddMedia={(files) => {
                    updatePostForm({ media: [...postForm.media, ...files].slice(0, 4) });
                    if (postForm.media.length + files.length > 4) {
                        setError("You can upload a maximum of 4 media files.");
                        // return;
                    }
                }}
                onAddEmoji={(emoji) => {
                    contentRef?.current
                        ?.chain()
                        .focus()
                        .insertContent(emoji)
                        .run();
                }}
            />

            <SimpleDialog
                open={openSaveDraftPopup}
                onOpenChange={setOpenSaveDraftPopup}

            >
                <SimpleDialog.Content>
                    <SaveDraftPopup
                        onSaveDraft={handleSaveDraft}
                        onDiscardDraft={handleDiscardDraft}
                        onClose={() => setOpenSaveDraftPopup(false)}
                    />
                </SimpleDialog.Content>

            </SimpleDialog>

        </div>
    );
});

export default CreatePostForm;