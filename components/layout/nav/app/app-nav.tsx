"use client";
import React from 'react';
import PathBreadCrumb from './path-bread-crumb';
import NotificationIcon from './notification-icon';
import StreakIcon from './streak-icon';
import UserNavIcon from './user-nav-icon';
import LayoutChangeIcon from './layout-change-icon';
import AppNavTitle from './app-nav-title';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import AppSidebarOpenIcon from '../../sidebar/app-sidebar-open-icon';
import PageSearch from './page-search';

const AppNav = () => {

    // return null;
    return (
        <nav className='sticky top-0 right-0 left-0 z-30 w-full h-14 shrink-0 flex items-center justify-start gap-2 px-3 bg-primary dark:bg-background shadow-xs. border-b border-border/40 shadow-[0_1px_1px_-1px_rgba(0,0,0,0.1)].'>

            <AppSidebarOpenIcon />

            <AppNavTitle />

            {/* <PageSearch /> */}

            {/* <PathBreadCrumb /> */}

            <div className='h-full w-fit md:min-w-40 lg:min-w-44 ml-auto flex items-center justify-center gap-4 bg-fuchsia-5000'>
                <NotificationIcon />
                <StreakIcon />
                <LayoutChangeIcon />
                <UserNavIcon />
            </div>

        </nav>
    );
};

export default AppNav;