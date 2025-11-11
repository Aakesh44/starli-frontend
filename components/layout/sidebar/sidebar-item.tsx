import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export type SidebarItemProps = {
    label: string;
    icon: React.ReactNode;
    href?: string;
} & { sideBarOpen?: boolean } & React.ComponentProps<'li'>;

const SidebarItem = ({ label, href, icon, children, sideBarOpen, className }: SidebarItemProps) => {
    return (
        <li
            className={cn(
                'group font-poppins bg-lime-2000 flex h-8 w-full items-center justify-start gap-2 rounded px-1 pl-2 text-sm transition-colors hover:bg-amber-500/80 dark:hover:bg-ring/50',
                className
            )}
        >
            <SimpleTooltip content={label} disabled={true}>

                {children ? (
                    children
                ) : (
                    <Link
                        href={href ? href : '#'}
                        className="flex h-full w-full items-center justify-start gap-2 group-hover:gap-2.5 transition-all duration-200"
                    >
                        <span className="text-foreground/80 text-3xl stroke-2">{icon && icon}</span>

                        <span className={cn('truncate', sideBarOpen === false ? 'hidden' : '')}>{label}</span>
                    </Link>
                )}
            </SimpleTooltip>
        </li>
    );
};

export default SidebarItem;