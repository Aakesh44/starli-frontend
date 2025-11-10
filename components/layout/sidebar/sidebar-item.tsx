import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export type SidebarItemProps = {
    label: string;
    icon: React.ReactNode;
    href?: string;

} & React.ComponentProps<'li'>;

const SidebarItem = ({ label, href, icon, children, className }: SidebarItemProps) => {
    return (
        <li
            className={cn(
                'group font-poppins bg-lime-2000 flex h-8 w-full items-center justify-start gap-2 rounded px-1 text-sm transition-colors hover:bg-amber-500/80 dark:hover:bg-ring/50',
                className
            )}
        >
            {children ? (
                children
            ) : (
                <Link
                    href={href ? href : '#'}
                    className="flex h-full w-full items-center justify-start gap-2 group-hover:gap-2.5 transition-all duration-200"
                >
                    <span className="text-foreground/80 text-3xl stroke-2">{icon && icon}</span>
                    <span>{label}</span>
                </Link>
            )}
        </li>
    );
};

export default SidebarItem;