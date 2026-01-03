import { DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Copy, FlagTriangleRight, Link2, ThumbsDown } from 'lucide-react';
import React from 'react';

const PostExtraActionsDropdown = () => {
    return (
        <DropdownMenuGroup className='w-36 p-1 text-xs font-medium font-sans text-secondary-foreground. bg-white'>

            <DropdownMenuItem className='px-3 py-2 cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'>
                <Link2 className='group-hover:text-foreground size-4' />
                Copy Link
            </DropdownMenuItem>

            <DropdownMenuItem className='px-3 py-2  cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'>
                <ThumbsDown className='group-hover:text-foreground size-4' />
                Not Interested
            </DropdownMenuItem>

            <DropdownMenuItem className='px-3 py-2  cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'>
                <FlagTriangleRight className='group-hover:text-foreground size-4' />
                Report
            </DropdownMenuItem>

        </DropdownMenuGroup>
    );
};

export default PostExtraActionsDropdown;