import { Button } from '@/components/ui/button';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Menu } from 'lucide-react';
import React from 'react';

const AppSidebarOpenIcon = () => {

    const setOpenSidebar = useSidebarStore(s => s.setIsOpen);

    return (
        <Button
            variant={"ghost"}
            size={"icon-sm"}
            onClick={() => setOpenSidebar(true)}
            className='md:hidden'
        >
            <Menu className='size-5' />
        </Button>
    );
};

export default AppSidebarOpenIcon;