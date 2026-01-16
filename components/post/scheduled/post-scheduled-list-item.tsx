import React from 'react';
import { Button } from '../../ui/button';
import { CalendarClock, LoaderCircle, Trash2 } from 'lucide-react';
import { format } from 'date-fns'
import { Post } from '@/types/post';
import { useDeleteScheduledPost } from '@/hooks/posts/useDeleteScheduledPost';
import { useSetSelectedEditorPost } from '@/hooks/posts/useSelectedEditorPost';

type PostScheduledListItemProps = {
    post: Post
};

const PostScheduledListItem = ({
    post
}: PostScheduledListItemProps) => {

    const setSelectedEditorPost = useSetSelectedEditorPost();
    const { mutate: deleteScheduled, isPending } = useDeleteScheduledPost();

    return (
        <div className='w-full h-20 px-3 shrink-0 font-sans flex items-center justify-start gap-2 hover:bg-secondary/80 rounded-md bg-cyan-30'>

            <button
                onClick={() => setSelectedEditorPost({ source: 'SCHEDULED', post })}
                className='grow min-w-0 h-full p-0 flex flex-col items-start justify-center gap-1 cursor-pointer  bg-fuchsia-3000'>
                <p className='font-semibold text-start'>{post.title}</p>
                <p
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className='min-w-0 w-full max-w-full text-start text-sm truncate line-clamp-1'
                >
                    {/* {post.content} */}
                </p>
                <p className='text-xs text-green-600 flex items-center justify-start gap-1'>
                    <span>
                        <CalendarClock className='size-4' />
                    </span>
                    {format(new Date(post.scheduledAt), 'eeee • MMM d, yyyy • h:mm a')}
                </p>
            </button>

            <Button
                onClick={() => deleteScheduled(post.id)}
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

export default PostScheduledListItem;