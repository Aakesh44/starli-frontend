import React from 'react';
import { DropdownMenuGroup, DropdownMenuItem } from '../../ui/dropdown-menu';
import { SelectGroup, SelectItem } from '../../ui/select';

const TAGS = [
    '#show',
    '#ask',
    "#share",
    "#open-source",
    "#help",
    "#job",
    "#book",
    "#learn",
    "#news",
    "#event",
    "#thoughts"
];

const TagsDropDown = () => {

    return (
        <SelectGroup
            className='w-44 max-h-60 p-1 text-xs font-medium font-sans text-secondary-foreground. bg-white overflow-y-auto scrollbar-thin'
            style={{
                scrollbarWidth: 'none'
            }}
        >

            {[...TAGS].map((tag, index) => {
                return (

                    <SelectItem
                        key={index}
                        value={tag}
                        className='px-3 py-2 cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'
                    >
                        {tag}
                    </SelectItem>
                )
            })}
        </SelectGroup>
    )
    return (
        <DropdownMenuGroup
            className='w-36 max-h-60 p-1 text-xs font-medium font-sans text-secondary-foreground. bg-white overflow-y-auto scrollbar-thin'
            style={{
                scrollbarWidth: 'none'
            }}
        >

            {TAGS.map((tag, index) => {
                return (

                    <DropdownMenuItem
                        key={index}
                        className='px-3 py-2 cursor-pointer w-full flex items-center justify-start gap-2 hover:gap-2.5 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200'
                    >
                        {tag}
                    </DropdownMenuItem>
                )
            })}
        </DropdownMenuGroup>
    );
};

export default TagsDropDown;