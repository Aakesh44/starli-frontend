"use client";

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import SidebarItem, { SidebarItemProps } from './sidebar-item';
import { ChevronDown, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toUpperCase } from '@/lib/stringUtils';
import { useSidebarStore } from '@/stores/useSidebarStore';

type SidebarSectionProps = {
    title?: string;
    theme?: string;
    items?: SidebarItemProps[];
} & React.ComponentProps<'div'>;

const SidebarSection = ({
    title,
    items,
    theme,
    className,
    children,
    ...props
}: SidebarSectionProps & React.ComponentProps<'div'>) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);

    if (!children && !items?.length && !title) {
        return null;
    }

    return (
        <div
            className={cn('h-fit min-h-fit w-full shrink-0 space-y-3 bg-lime-100.', className)}
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
                        disabled={!isSidebarOpen}
                        className={cn(
                            "group shrink-0 h-7  p-1 text-xs font-poppins font-medium flex items-center justify-between w-full text-left transition-all focus-visible:ring ring-ring/50 rounded-md",
                            'data-[state=closed]:mb-2'
                        )}
                    >
                        <span className='w-8 hidden'>
                        </span>

                        <p
                            className={cn('font-geist-mono. text-primary-foreground tracking-wider', isSidebarOpen === false ? 'hidden' : '', 'duration-[100ms]')}
                        >
                            {toUpperCase(title || '')}
                        </p>

                        <Minus className={cn('h-6 text-stone-400 group-data-[state=open]:h-5 group-data-[state=open]:rotate-180 transition-all', theme)} />

                        <ChevronDown className='hidden size-4 text-foreground/60 group-data-[state=open]:rotate-180 transition-all cursor-pointer' />

                    </CollapsibleTrigger>

                    <CollapsibleContent className='mt-1 py-1 space-y-2 overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down' >
                        {items?.map((item, index) => (
                            <SidebarItem
                                key={index}
                                label={item.label}
                                href={item.href}
                                icon={item.icon}
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