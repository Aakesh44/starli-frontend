"use client";
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from './select';
import { cn } from '@/lib/utils';
import { textareaVariants } from './textarea';
import skillIcon from "@/public/icons/skills/javascript.svg";
import { Button, buttonVariants } from './button';
import Image from 'next/image';
import { X } from 'lucide-react';
import { SelectValue } from '@radix-ui/react-select';
import { Popover, PopoverTrigger, SimplePopover } from './popover';
import { PopoverContent } from '@radix-ui/react-popover';
import { Command } from 'cmdk';
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';

type ChipInputProps = {
    values: string[];
    onChange: (values: string[]) => void
    max?: number;
};

const ChipInput = ({
    values, onChange, max
}: ChipInputProps) => {

    const handleAddValue = (val: string) => {

        if (max && values.length >= max) return;

        onChange(
            values.includes(val) ? values : [...values, val]
        )

    };

    const handleRemoveValue = (val: string) => {
        onChange(
            values.filter(value => value !== val)
        )
    };

    return (
        <Popover >

            <PopoverTrigger asChild className={cn(textareaVariants(), 'h-full')}>

                <div className='h-full min-h-full w-full bg-rose-4000'>

                    <div
                        className={cn('h-fit w-full flex items-start justify-start flex-wrap gap-2 bg-amber-5000')}
                    >
                        {[...values].map((val, index) => {
                            return (
                                <div key={`${val}-${index}`} className={cn(buttonVariants({ variant: 'primary', size: "icon-xxs" }), 'group shrink-0 w-fit min-w-fit p-1 px-2.5 flex items-center justify-start gap-1.5 ')}>
                                    <Image src={skillIcon} alt='icon' width={16} height={16} className={''} />
                                    <p className='text-xs font-medium'>{val}</p>
                                    <Button
                                        size={"icon-xxs"}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveValue(val)
                                        }}
                                        onPointerDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        className='size-4 p-1 shrink-0 border-0 bg-secondary  text-foreground group-hover:bg-destructive/10 group-hover:text-destructive rounded-full hover:shadow-none'
                                    >
                                        <X className='size-2.5' />
                                    </Button>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </PopoverTrigger>

            <PopoverContent className='w-96 mt-2 z-50 bg-white shadow rounded-lg'>
                <Command className='w-full z-50'>
                    <CommandInput placeholder="Search for a value..." />
                    <CommandList className='py-2'>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {[...Array(10)].map((_, index) => (
                            <CommandItem
                                key={index}
                                value={'Javascript ' + index.toString()}
                                onSelect={(currentValue) => {
                                    handleAddValue(currentValue);
                                }}
                                className='py-3'
                            >
                                <Image src={skillIcon} alt='icon' width={16} height={16} className={''} />
                                <p className='text-xs font-medium'>{'Javascript ' + index}</p>
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>

        </Popover>
    );
};

export default ChipInput;