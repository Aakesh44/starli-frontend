import { CalendarClock, Clock, LoaderCircle, Trash2 } from 'lucide-react';
import React from 'react';
import { Button } from '../../ui/button';
import { Post } from '@/types/post';
import { useDeleteDraft } from '@/hooks/posts/useDeleteDraft';
import { useSetSelectedEditorPost } from '@/hooks/posts/useSelectedEditorPost';
import { format } from 'date-fns';

type PostDraftListItemProps = {
    post: Post;
}

const PostDraftListItem = ({
    post
}: PostDraftListItemProps) => {

    const setSelectedEditorPost = useSetSelectedEditorPost();
    const { mutate: deleteDraft, isPending } = useDeleteDraft();

    return (
        <div
            className='w-full h-20 px-3 shrink-0 font-sans flex items-center justify-start gap-2 hover:bg-secondary/80 rounded-md bg-cyan-3000'
        >

            <button
                onClick={() => setSelectedEditorPost({ source: 'DRAFT', post })}
                className='grow min-w-0 h-full p-0 flex flex-col items-start justify-center gap-1 cursor-pointer  bg-fuchsia-3000'>
                <p className='font-semibold text-start'>{post.title}</p>
                <p
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className='min-w-0 w-full max-w-full text-start text-sm truncate line-clamp-1'
                >
                    {/* {post.content} */}
                </p>

                <p className='text-xs text-secondary-foreground flex items-center justify-start gap-1'>
                    <span>
                        <Clock className='size-4' />
                    </span>
                    {format(new Date(post.updatedAt), 'eeee • MMM d, yyyy • h:mm a')}
                </p>
            </button>

            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    deleteDraft(post.id)
                }}
                disabled={isPending}
                variant={"ghost"}
                size={"icon-xxs"}
                className={"text-destructive hover:text-destructive"}
            >
                {isPending ? <LoaderCircle /> : <Trash2 />}
            </Button>

        </div>
    );
};

export default PostDraftListItem;