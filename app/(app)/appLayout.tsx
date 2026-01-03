"use client";

import { cn } from '@/lib/utils';
import { useAppLayoutStore } from '@/stores/useAppLayoutStore';
import React, { useEffect } from 'react';

const AppLayoutWrapper = ({ children }: { children: React.ReactNode }) => {

    const { isFixedSize } = useAppLayoutStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex h-screen w-full mx-auto font-sans bg-primary overflow-y-auto bg-amber-3000 dark:bg-background">

            <div className={cn('mx-auto flex w-full min-h-screen  bg-amber-5000', isFixedSize ? 'max-w-[1600px]' : '')}>

                {children}

            </div>
        </div>
    );
};

export default AppLayoutWrapper;