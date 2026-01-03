import Header from '@/components/layout/nav/home/header';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex h-[100dvh] w-full flex-col items-center justify-start overflow-x-hidden overflow-y-auto">

            <Header />

            {children}

            <div className="relative hidden min-h-screen w-full bg-background">
                {/* Amber Glow Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
                    `,
                        backgroundSize: '100% 100%',
                    }}
                />
                {/* Your Content/Components */}
                {children}
            </div>
        </main>
    );
};

export default HomeLayout;
