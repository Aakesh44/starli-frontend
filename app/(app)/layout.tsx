import Sidebar from '@/components/layout/sidebar/sidebar';
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-screen w-full p-2 items-center justify-start gap-2.5 bg-[#FAFAFA] dark:bg-background">

            <Sidebar />

            <aside className="h-full grow rounded-lg bg-background dark:bg-secondary/40 drop-shadow-sm shadow-foreground p-2.5">{children}</aside>
        </main>
    );
};

export default AppLayout;
