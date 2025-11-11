"use client";

import { Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import SidebarFooter from './sidebar-footer';
import SidebarLogo from './sidebar-logo';
import SidebarContainer from './sidebar-container';
import SidebarSection from './sidebar-section';
import SidebarItem from './sidebar-item';
import SidebarDivider from './sidebar-devider';
import { SIDEBAR_MENU } from './sidebar-data';
import { cn } from '@/lib/utils';

const Sidebar = () => {

    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <aside className={cn(
            "border-border flex h-full shrink-0 flex-col gap-1 items-center justify-start border-r. overflow-hidden",
            openSidebar ? 'w-50 2xl:w-56' : 'w-12.5',
            'transition-all',
            'bg-teal-300.'
        )}>

            <SidebarLogo sideBarOpen={openSidebar} setSideBarOpen={setOpenSidebar} />

            <SidebarDivider />

            <SidebarContainer>

                <SidebarSection className='py-2' sideBarOpen={openSidebar}>
                    <SidebarItem
                        label="For you"
                        icon={<Sparkles strokeWidth={2} className="size-4" />}
                        sideBarOpen={openSidebar}
                    />
                </SidebarSection>

                {SIDEBAR_MENU.map(({ title, items }) => {
                    return (
                        <SidebarSection
                            key={title}
                            title={title}
                            items={items}
                            sideBarOpen={openSidebar}
                        />
                    )
                })}

            </SidebarContainer>

            <SidebarDivider className="mt-auto w-full" />

            <SidebarFooter sideBarOpen={openSidebar} />

        </aside>
    );
};

export default Sidebar;

