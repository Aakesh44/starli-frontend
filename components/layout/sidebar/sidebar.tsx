import { Atom, Bookmark, BookOpenCheck, CircleFadingPlus, Flame, GraduationCap, Heart, MessageCircleMore, NotepadText, Pen, PencilLine, PencilRuler, Scroll, Search, SearchCode, Sparkle, Sparkles, Tag, Zap } from 'lucide-react';
import React from 'react';
import SidebarFooter from './sidebar-footer';
import SidebarLogo from './sidebar-logo';
import SidebarContainer from './sidebar-container';
import SidebarSection from './sidebar-section';
import SidebarItem from './sidebar-item';
import SidebarDivider from './sidebar-devider';

const Sidebar = () => {
    return (
        <aside className="border-border flex h-full w-54 2xl:w-56 shrink-0 flex-col gap-1 items-center justify-start border-r.">

            <SidebarLogo />

            <SidebarDivider />

            <SidebarContainer>

                <SidebarSection className='py-2'>
                    <SidebarItem
                        label="For you"
                        icon={<Sparkles strokeWidth={2} className="size-4" />}
                    />
                </SidebarSection>

                <SidebarSection
                    title="Menu"
                    items={[
                        { label: 'Scroll', href: '/', icon: <Flame strokeWidth={2} className="size-4" /> },
                        { label: 'Starlight', href: '/cources', icon: <Zap strokeWidth={2} className="size-4" /> },
                        { label: 'Inbox', href: '/starlight', icon: <MessageCircleMore strokeWidth={2} className="size-4" />, },
                        { label: 'Search', href: '/inbox', icon: <Search strokeWidth={2} className="size-4" /> },
                    ]}
                />

                <SidebarSection
                    title='Cources'
                    items={[
                        { label: 'Cources', href: '/', icon: <GraduationCap strokeWidth={2} className="size-4" /> },
                        { label: 'My Cources', href: '/cources', icon: <BookOpenCheck strokeWidth={2} className="size-4" /> },
                        { label: 'Self Assessment', href: '/starlight', icon: <PencilLine strokeWidth={2} className="size-4" /> },
                    ]}
                />

                <SidebarSection
                    title="Networks"
                    items={[
                        { label: 'Planets', href: '/', icon: <Atom strokeWidth={2} className="size-4" /> },
                        {
                            label: 'New Planet',
                            href: '/starlight',
                            icon: <CircleFadingPlus strokeWidth={2} className="size-4" />,
                        },
                    ]}
                />

                <SidebarSection
                    title="Collections"
                    items={[
                        { label: 'Book Marks', href: '/', icon: <Bookmark strokeWidth={2} className="size-4" /> },
                        { label: 'Liked Posts', href: '/library', icon: <Heart strokeWidth={2} className="size-4" /> },

                    ]}
                />

            </SidebarContainer>

            <SidebarDivider className="mt-auto w-full" />

            <SidebarFooter />
        </aside>
    );
};

export default Sidebar;

