import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PanelLeftClose } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SidebarLogo = ({ className, ...props }: React.ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'flex h-fit shrink-0 w-full items-center justify-between px-2 py-2 pr-1',
                className
            )}
            {...props}
        >
            <Link
                href={'/'}
                className="font-poppins flex w-fit items-center text-2xl font-bold"
            >
                🌠{' '}
                <h1 className="bg-gradient-to-tl from-yellow-600 to-orange-600 bg-clip-text text-2xl text-transparent">
                    Starli
                </h1>
            </Link>

            <Button variant="ghost" size="icon-sm" className="p-1">
                <PanelLeftClose className="text-black" />
            </Button>
        </div>
    );
};

export default SidebarLogo;