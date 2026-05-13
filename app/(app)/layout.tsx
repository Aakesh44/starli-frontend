import AppNav from '@/components/layout/nav/app/app-nav';
import Sidebar from '@/components/layout/sidebar/sidebar';
import React from 'react';
import AppMainLayout from './appMainLayout';
import AppLayoutWrapper from './appLayoutWrapper';
import CreatePostFormPreview from '@/components/post/create-post/create-post-form-preview';
import CreatePostFormPreviewForm from '@/components/post/create-post/create-post-form-preview-form';

const AppLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppLayoutWrapper>

            <Sidebar />

            <AppMainLayout>

                <AppNav />

                <div className='w-full max-h-full grow p-3 flex flex-col overflow-scroll bg-lime-3000'>
                    {children}
                </div>

            </AppMainLayout>

        </AppLayoutWrapper>

    );
};

export default AppLayout;
