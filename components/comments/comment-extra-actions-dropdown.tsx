import React from 'react';
import { DropdownMenuGroup, DropdownMenuItem } from '../ui/dropdown-menu';
import { FlagTriangleRight } from 'lucide-react';

const CommentExtraActionsDropdown = () => {
    return (
        <DropdownMenuGroup className='w-36 p-1 text-xs font-medium font-sans text-secondary-foreground. bg-white'>

            <DropdownMenuItem className='px-3 py-2  cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'>
                <FlagTriangleRight className='group-hover:text-foreground size-4' />
                Report
            </DropdownMenuItem>

        </DropdownMenuGroup>
    );
};

export default CommentExtraActionsDropdown;