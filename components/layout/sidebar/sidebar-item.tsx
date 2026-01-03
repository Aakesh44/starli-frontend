import { buttonVariants } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/useSidebarStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type SidebarItemProps = {
    label: string;
    icon: React.ReactNode;
    href?: string;
} & {} & React.ComponentProps<'li'>;

const SidebarItem = ({ label, href, icon, children, className }: SidebarItemProps) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);

    const pathname = usePathname();

    const isActiveRoute = pathname.startsWith(href || '#');

    return (
        <li
            className={cn(
                'group font-poppins bg-lime-2000 flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md cursor-pointer text-secondary-foreground text-sm border border-transparent transition-transform overflow-hidden.',
                isActiveRoute ? 'bg-background text-primary-foreground border-border/60' : '',
                'hover:bg-background hover:text-primary-foreground hover:border-border/60',
                isSidebarOpen ? 'aspect-square' : 'w-full',
                className
            )}
        >
            <SimpleTooltip content={label} hidden={isSidebarOpen}>

                {children ? (
                    children
                ) : (
                    <Link
                        href={href ? href : '#'}
                        className="flex h-full w-full items-center justify-start gap-1.5 group-hover:gap-2 transition-all duration-200 focus-visible:ring-ring/50 focus-visible:ring-[2px] rounded-md overflow-hidden"
                    >
                        <span className={cn(
                            // buttonVariants({ variant: 'ghost', size: 'icon-sm', className: 'hover:text' }),
                            "px-2. bg-rose-4000 h-full aspect-square grid place-items-center text-3xl stroke-2 group-hover:scale-[1.01].",
                        )}
                        >
                            {icon}
                        </span>

                        <p className={cn('font-medium leading-[100%]. truncate', isSidebarOpen === false ? 'hidden' : '')}>{label}</p>
                    </Link>
                )}
            </SimpleTooltip>
        </li>
    );
};

export default SidebarItem;