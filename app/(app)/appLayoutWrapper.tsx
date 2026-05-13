"use client";

import CreatePostForm from '@/components/post/create-post/create-post-form';
import CreatePostFormPreview from '@/components/post/create-post/create-post-form-preview';
import CreatePostFormPreviewForm from '@/components/post/create-post/create-post-form-preview-form';
import { ControlledDialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useAppLayoutStore } from '@/stores/useAppLayoutStore';
import { useOpenNewPostForm } from '@/stores/useOpenNewPostForm';
import { useSidebarStore } from '@/stores/useSidebarStore';
import React, { useEffect } from 'react';

const AppLayoutWrapper = ({ children }: { children: React.ReactNode }) => {

    const { isFixedSize, isHydrated } = useAppLayoutStore();
    const { isOpen, openForm, closeForm } = useOpenNewPostForm();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!isHydrated) return (
        <div className="flex h-screen w-full mx-auto font-sans bg-primary items-center justify-center overflow-y-auto bg-amber-3000 dark:bg-background">
            LOADING...
        </div>
    );

    return (
        <div className="flex h-screen w-full mx-auto font-sans bg-primary overflow-y-auto bg-amber-3000 dark:bg-background">

            <div className={cn('mx-auto flex w-full min-h-screen bg-amber-5000', isFixedSize ? 'max-w-[1600px]' : '')}>
                {isOpen && (
                    <ControlledDialog
                        open={isOpen}
                        onOpenChange={(open) => {
                            if (!open) {
                                closeForm();
                            }
                        }}
                        className='w-fit h-fit p-0 flex'

                    >
                        <CreatePostForm onSuccess={closeForm} />
                    </ControlledDialog>
                )}
                {children}

            </div>
        </div>
    );
};

export default AppLayoutWrapper;