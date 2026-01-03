import React from 'react';
import { Button } from '../ui/button';
import { Ellipsis } from 'lucide-react';
import { SimpleDropDownMenu } from '../ui/dropdown-menu';
import CommentExtraActionsDropdown from './comment-extra-actions-dropdown';
import CommentForm from './comment-form';

const CommentActions = () => {

    return (
        <>
            <div className='w-full h-8 text-xs font-medium flex items-center justify-start gap-4 bg-red-3000'>

                <button className='p-1 px-2 rounded-md hover:bg-border/80'>
                    Like • 2
                </button>

                <button className='p-1 px-2 rounded-md hover:bg-border/80'>
                    Reply
                </button>

                <SimpleDropDownMenu menuContent={<CommentExtraActionsDropdown />}>
                    <button className='p-1 px-2 rounded-md hover:bg-border/80'>
                        <Ellipsis className='size-3' />
                    </button>
                </SimpleDropDownMenu>

            </div>

            <CommentForm />
        </>
    );
};

export default CommentActions;