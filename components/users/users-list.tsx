import React from 'react';
import UsersListItem from './users-list-item';
import { usePostLikes } from '@/hooks/posts/usePostLikes';
import { ArrowBigUp, NotebookPen } from 'lucide-react';


type CommentListProps = {
    targetId: string;
    targetType: 'POST';
    view?: 'default' | 'compact';
} & React.ComponentProps<'div'>;

const UsersList = ({ targetId, view }: CommentListProps) => {

    const { data: likes, isLoading } = usePostLikes(targetId);
    // console.log('🟢⚠️🟢 like list data', data);

    if (isLoading) return <div>Loading...</div>;

    if (!likes?.length && view === 'default') return <UsersListEmpty />;

    if (!likes?.length) return null;

    return (
        <ul className='mt-5 w-full h-fit flex flex-col items-start justify-start'>

            {[...likes].map((like) => {
                return (
                    <UsersListItem key={like.id} user={like} />
                )
            })}
        </ul>
    );
};

export const UsersListEmpty = () => {
    return (
        <div className='py-20 w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

            <ArrowBigUp className='stroke-[1] size-10 mb-5 text-primary-foreground/80' />

            <p className='font-semibold'>Your upvotes are welcome!</p>

            <p>One upvote is worth one word.</p>

        </div>
    );
};

export default UsersList