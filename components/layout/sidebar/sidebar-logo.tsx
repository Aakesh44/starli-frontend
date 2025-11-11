import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PanelLeftClose } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
    sideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ComponentProps<'div'>;

const SidebarLogo = ({ sideBarOpen, setSideBarOpen, className, ...props }: Props) => {

    return (
        <div
            className={cn(
                'flex h-fit shrink-0 w-full items-center justify-between px-2 py-2 pr-1',
                className
            )}
            {...props}
        >
            <div className='group'>

                <Link
                    href={'/'}
                    className={cn(
                        "font-poppins flex w-fit items-center text-2xl font-bold",
                        'transition-[display] duration-500',
                        sideBarOpen ? '' : 'group-hover:hidden'
                    )}
                >
                    🌠{' '}
                </Link>

                <Button
                    variant="ghost" size="icon-sm"
                    className={cn(
                        "p-1 place-items-center hidden",
                        sideBarOpen ? '' : 'group-hover:grid'
                    )}
                    onClick={() => setSideBarOpen(prev => !prev)}
                >
                    <PanelLeftClose strokeWidth={2} className={`text-foreground/80 ${sideBarOpen ? '-rotate-180' : ''} duration-200 transition-transform`} />
                </Button>

            </div>

            <Link
                href={'/'}
                className={cn(
                    "mr-auto font-poppins flex w-fit items-center text-2xl font-bold",
                    !sideBarOpen ? 'hidden' : '',
                    'transition-[display] duration-500'
                )}
            >
                <h1 className="bg-gradient-to-tl from-yellow-600 to-orange-600 bg-clip-text text-2xl text-transparent">
                    Starli
                </h1>
            </Link>

            <Button variant="ghost" size="icon-sm" className="p-1" onClick={() => setSideBarOpen(prev => !prev)}>
                <PanelLeftClose strokeWidth={2} className={`text-foreground/80 ${!sideBarOpen ? 'hidden' : ''} duration-200 transition-transform`} />
            </Button>
        </div>
    );
};

export default SidebarLogo;