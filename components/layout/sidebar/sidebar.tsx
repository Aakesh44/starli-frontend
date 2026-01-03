"use client";

import { Sparkles } from 'lucide-react';
import React, { } from 'react';
import SidebarFooter from './sidebar-footer';
import SidebarLogo from './sidebar-logo';
import SidebarContainer from './sidebar-container';
import SidebarSection from './sidebar-section';
import SidebarItem from './sidebar-item';
import { SIDEBAR_MENU } from './sidebar-data';
import CommandMenuIcon from './command-menu-icon';
import SidebarWrapper from './sidebar-wrapper';

const Sidebar = () => {

    return (
        <SidebarWrapper>

            <SidebarLogo />

            <SidebarContainer>

                <SidebarSection className='py-2'>

                    <SidebarItem
                        label="Home"
                        href='/home'
                        icon={<Sparkles strokeWidth={2} className="size-4" />}
                    />
                </SidebarSection>

                {SIDEBAR_MENU?.map(({ title, items, theme }) => {
                    return (
                        <SidebarSection
                            key={title}
                            title={title}
                            items={items}
                            theme={theme}
                        />
                    )
                })}

            </SidebarContainer>

            <div className='mt-auto w-full space-y-2'>

                <CommandMenuIcon />

                <SidebarFooter />
            </div>


        </SidebarWrapper>
    );
};

export default Sidebar;

