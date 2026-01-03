import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { PanelLeftClose, Star } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';

type Props = {
} & React.ComponentProps<'div'>;

const SidebarLogo = ({ className, ...props }: Props) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    const setSideBarOpen = useSidebarStore((state) => state.setIsOpen);

    return (
        <div
            className={cn(
                'flex h-10 bg-fuchsia-2000 shrink-0 w-full items-center justify-between gap-1.5 ',
                className
            )}
            {...props}
        >
            <div className='group size-8 shrink-0 grid place-items-center'>

                <Link
                    href={'/'}
                    className={cn(
                        "font-poppins flex w-fit items-center text-2xl font-bold",
                        'rotate-0 transition-[display] duration-500',
                        isSidebarOpen ? '' : ' group-hover:hidden'
                    )}
                >
                    <Star />
                </Link>


                <Button
                    variant="ghost" size="icon-sm"
                    className={cn(
                        "p-1 text-primary-foreground hover:bg-background hover:text-primary-foreground  border border-transparent hover:border-border/60 place-items-center hidden hover:shadow-none",
                        isSidebarOpen ? '' : 'group-hover:grid'
                    )}
                    onClick={() => { setSideBarOpen(true); console.log('click'); }}
                >
                    <PanelLeftClose className={""} />
                </Button>

            </div>

            <Link
                href={'/'}
                className={cn(
                    "mr-auto font-poppins flex w-fit items-center",
                    !isSidebarOpen ? 'hidden' : '',
                    'transition-[display] duration-500'
                )}
            >
                <h1 className="text-xl font-poppins font-semibold text-primary-foreground">
                    STARLI
                </h1>
            </Link>

            <SimpleTooltip content={"Ctrl + \\"}>

                <Button
                    variant="ghost" size="icon-sm"
                    className={`p-1  text-primary-foreground hover:bg-background hover:text-primary-foreground border border-transparent hover:border-border/60 grid place-items-center ${isSidebarOpen ? 'block. hidden' : 'hidden'}`}
                    onClick={() => setSideBarOpen(false)}
                >
                    <PanelLeftClose className={""} />
                </Button>

            </SimpleTooltip>
        </div>
    );
};

export default SidebarLogo;