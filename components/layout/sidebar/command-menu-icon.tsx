import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Command } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CommandMenu from './command-menu';
import { useSidebarStore } from '@/stores/useSidebarStore';

const CommandMenuIcon = ({ className }: { className?: string }) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        const abortController = new AbortController();
        const { signal } = abortController;

        document.addEventListener(
            "keydown",
            (e: KeyboardEvent) => {
                if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                    if (
                        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                        e.target instanceof HTMLInputElement ||
                        e.target instanceof HTMLTextAreaElement ||
                        e.target instanceof HTMLSelectElement
                    ) {
                        return;
                    }

                    e.preventDefault();
                    setOpen((open) => !open);
                }
            },
            { signal }
        );

        return () => abortController.abort();
    }, []);

    return (
        <div
            className={cn(
                'group font-poppins bg-lime-2000 flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md cursor-pointer text-secondary-foreground  text-sm border border-transparent transition-transform overflow-hidden.',
                'hover:bg-background hover:text-primary-foreground hover:shadow-2xs. hover:border-border/60',
                isSidebarOpen ? 'aspect-square' : 'w-full',
                className
            )}
        >
            <SimpleTooltip content={`Ctrl + K`} hidden={isSidebarOpen}>

                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="flex h-full w-full items-center justify-start gap-1.5 group-hover:gap-2 transition-all duration-200 focus-visible:ring-ring/50 focus-visible:ring-[2px] rounded-md overflow-hidden"
                >
                    <span className={cn(
                        // buttonVariants({ variant: 'ghost', size: 'icon-sm', className: 'hover:text' }),
                        "px-2. bg-rose-4000 h-full aspect-square grid place-items-center text-3xl stroke-2 group-hover:scale-[1.01].",
                    )}
                    >
                        <Command className='size-4' />
                    </span>

                    <p className={cn('font-medium truncate', isSidebarOpen === false ? 'hidden' : '')}>{`Ctrl + K`}</p>
                </button>

            </SimpleTooltip>

            <CommandMenu open={open} setOpen={setOpen} />
        </div>
    );
};

export default CommandMenuIcon;