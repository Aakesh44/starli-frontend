import { useSidebarStore } from '@/stores/useSidebarStore';
import React from 'react';

const ScrollLayouts = ({ children }: { children: React.ReactNode }) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);

    return (
        <section className='w-full min-h-fit h-full pl-60 flex rounded-b-md bg-sky-3000'>

            <div className='w-full h-full lg:w-xl 2xl:w-2xl ml-60 border-x border-t border-border/60 rounded-md overflow-hidden bg-white'>
                {children}
            </div>

        </section>
    );
};

export default ScrollLayouts;