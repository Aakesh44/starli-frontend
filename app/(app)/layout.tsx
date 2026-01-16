import AppNav from '@/components/layout/nav/app/app-nav';
import Sidebar from '@/components/layout/sidebar/sidebar';
import React from 'react';
import AppMainLayout from './appMainLayout';
import AppLayoutWrapper from './appLayout';

const AppLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppLayoutWrapper>

            <Sidebar />

            <AppMainLayout>

                <AppNav />

                <div className='w-full grow p-3 flex flex-col0'>
                    {children}
                </div>

            </AppMainLayout>

        </AppLayoutWrapper>

    );
};

export default AppLayout;
