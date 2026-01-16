import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/useSidebarStore';
import React, { useEffect } from 'react';

type Props = React.ComponentProps<'aside'>;

const SidebarWrapper = ({ className, ...props }: Props) => {

    const isOpen = useSidebarStore(state => state.isOpen);
    const toggleSidebar = useSidebarStore(state => state.toggleSidebar);

    useEffect(() => {

        const abortController = new AbortController();
        const { signal } = abortController;

        function handleKeyDown(e: KeyboardEvent) {

            if (e.ctrlKey || e.metaKey) {
                if (e.key === "\\" || e.code === "KeyB") {

                    if (
                        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                        e.target instanceof HTMLInputElement ||
                        e.target instanceof HTMLTextAreaElement ||
                        e.target instanceof HTMLSelectElement
                    ) {
                        return;
                    }

                    toggleSidebar();
                }
            }

        }

        document.addEventListener('keydown', handleKeyDown, { signal });

        return () => abortController.abort();

    }, []);

    return (
        <aside className={cn(
            "fixed top-0 z-50 border-r border-border/40 flex h-full max-h-screen px-3 pb-3 shrink-0 flex-col gap-2 items-center justify-start overflow-hidden",
            isOpen ? 'bg-white shadow md:bg-primary md:shadow-none' : '-translate-x-full md:translate-x-0',
            isOpen ? 'w-60 max-w-60' : ' w-14 max-w-14 pr-3',
            '',
            'transition-all',
        )}
            {...props}
        />

    );
};

export default SidebarWrapper;