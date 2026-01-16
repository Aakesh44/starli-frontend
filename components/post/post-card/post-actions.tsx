import React from 'react';
import { Button } from '../../ui/button';
import { ArrowBigUp, Bookmark, EllipsisVertical, MessageSquareText, RefreshCw } from 'lucide-react';
import { SimpleDropDownMenu } from '../../ui/dropdown-menu';
import PostExtraActionsDropdown from './post-extra-actions-dropdown';
import { Post } from '@/types/post';

type Props = {
    post: Post
}
const PostActions = ({
    post
}: Props) => {

    const { counts } = post;

    return (
        <div className='w-full h-10 flex items-center justify-between bg-lime-3000'>

            <div className='h-full w-fit flex items-center justify-start gap-8'>

                <Button variant={"ghost"} size={"icon-xxs"} className='group-hover:bg-white hover:bg-white hover:border-transparent hover:shadow-none group/icon'>
                    <span className='p-1 rounded-md group-hover/icon:bg-blue-100 group-hover/icon:text-blue-700'>
                        <MessageSquareText className='group-hover/icon:animate-[bell-ring_1s_ease-in-out_0.1s] transition-all duration-300 origin-bottom-left' />
                    </span>
                    <span>
                        {counts.comments}
                    </span>
                </Button>

                <Button variant={"ghost"} size={"icon-xxs"} className='group-hover:bg-white hover:bg-white hover:border-transparent hover:shadow-none group/icon'>
                    <span className='p-1 rounded-md group-hover/icon:bg-orange-100 group-hover/icon:text-orange-600'>
                        <RefreshCw className='group-hover/icon:rotate-45 transition-all duration-300' />
                    </span>
                    <span>
                        {counts.reshares}
                    </span>
                </Button>

                <Button variant={"ghost"} size={"icon-xxs"} className='group-hover:bg-white hover:bg-white hover:border-transparent hover:shadow-none group/icon'>
                    <span className='p-1 rounded-md group-hover/icon:bg-green-100 group-hover/icon:text-green-700'>
                        <ArrowBigUp className='group-hover/icon:pb-px transition-all duration-300' />
                    </span>
                    <span>
                        {counts.reactions}
                    </span>
                </Button>
            </div>

            <div className='w-fit h-full flex items-center justify-start gap-5'>

                <Button variant={"ghost"} size={"icon-xxs"} className='group-hover:bg-white hover:border-transparent hover:shadow-none hover:bg-rose-50 hover:text-rose-700'>
                    <Bookmark />
                </Button>

                <SimpleDropDownMenu menuContent={<PostExtraActionsDropdown />}>

                    <Button variant={"ghost"} size={"icon-xxs"} className='group-hover:bg-white'>
                        <EllipsisVertical />
                    </Button>

                </SimpleDropDownMenu>
            </div>

        </div>
    );
};

export default PostActions;