"use client";

import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/useSidebarStore';
import React, { useState } from 'react';

const AppMainLayout = ({ children }: { children: React.ReactNode }) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    const [mounded, setMounded] = useState(false);
    React.useEffect(() => setMounded(true), []);

    return (
        <main
            className={cn(
                'w-screen md:w-auto grow min-h-fit h-full flex flex-col bg-green-3000',
                'transition-[margin-left] ease-in-out duration-300',
                !mounded ? 'md:ml-60' : isSidebarOpen ? 'md:ml-60' : 'md:ml-14'
            )}
        >

            {children}

        </main>
    );
};

export default AppMainLayout;