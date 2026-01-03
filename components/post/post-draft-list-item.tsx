import { Trash2 } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

interface PostDraftListItemProps {
    items: {
        id: number;
        title: string;
        description: string;
    }
}


const PostDraftListItem = ({ items }: PostDraftListItemProps) => {
    return (
        <div className='w-full h-14 shrink-0 font-sans flex items-center justify-start gap-2 bg-cyan-3000'>

            <div className='grow min-w-0 h-full p-0 flex flex-col items-start justify-center cursor-pointer hover:bg-secondary/80 bg-fuchsia-3000'>
                <p className='w-full block font-semibold truncate'>{items.title + items.description}</p>
                <p className='w-full truncate'>{items.description}</p>
            </div>

            <Button variant={"ghost"} size={"icon-xxs"} className={"text-destructive hover:text-destructive"}>
                <Trash2 />
            </Button>

        </div>
    );
};

export default PostDraftListItem;