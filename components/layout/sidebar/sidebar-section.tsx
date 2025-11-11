"use client";

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import SidebarItem, { SidebarItemProps } from './sidebar-item';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type SidebarSectionProps = {
    sideBarOpen: boolean
    title?: string;
    items?: SidebarItemProps[];
} & React.ComponentProps<'div'>;

const SidebarSection = ({
    title,
    items,
    sideBarOpen,
    className,
    children,
    ...props
}: SidebarSectionProps & React.ComponentProps<'div'>) => {


    if (!children && !items?.length && !title) {
        return null;
    }

    return (
        <div
            className={cn('h-fit min-h-fit w-full shrink-0 space-y-3 px-2 py-1 bg-lime-100.', className)}
            {...props}
        >

            {children ? (
                children
            ) : (
                <Collapsible
                    className='w-full h-fit'
                    defaultOpen
                >

                    <CollapsibleTrigger
                        disabled={!sideBarOpen}
                        className={cn(
                            "group p-1 text-xs font-poppins font-medium flex items-center justify-between w-full text-left transition-all focus-visible:ring ring-ring/50",
                            sideBarOpen === false ? 'invisible' : '', 'duration-[0ms]'
                        )}
                    >
                        {title}

                        <ChevronDown className='size-4 text-foreground/60 group-data-[state=open]:rotate-180 transition-all cursor-pointer' />
                    </CollapsibleTrigger>

                    <CollapsibleContent className='mt-1  py-1 space-y-2 overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down' >
                        {items?.map((item, index) => (
                            <SidebarItem
                                key={index}
                                label={item.label}
                                href={item.href}
                                icon={item.icon}
                                sideBarOpen={sideBarOpen}
                            />
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            )}
        </div>
        // <ul className="w-full space-y-2">

        // </ul>
    );
};

export default SidebarSection;