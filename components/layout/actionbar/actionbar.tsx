import { cn } from '@/lib/utils';
import React from 'react';

const Actionbar = () => {

    const visible = !!!!true;

    return (
        <aside className={cn(
            'shrink-0 h-full border-l bg-fuchsia-2000',
            visible ? 'w-90' : 'w-0', 'transition-[width] ease-in-out duration-500'
        )}>

            {/* <ActionNavBar /> */}

        </aside>
    );
};

export default Actionbar;