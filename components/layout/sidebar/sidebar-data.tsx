import { Atom, Bookmark, BookOpenCheck, CircleFadingPlus, Flame, GraduationCap, Heart, MessageCircleMore, PencilLine, Search, Zap } from 'lucide-react';

export const SIDEBAR_MENU = [
    {
        title: "Menu",
        items: [
            {
                label: 'Scroll',
                href: '/scroll',
                icon: <Flame strokeWidth={2} className="size-4" />
            },
            {
                label: 'Starlight',
                href: '/starlight',
                icon: <Zap strokeWidth={2} className="size-4" />
            },
            {
                label: 'Inbox',
                href: '/inbox',
                icon: <MessageCircleMore strokeWidth={2} className="size-4" />,
            },
            {
                label: 'Search',
                href: '/search',
                icon: <Search strokeWidth={2} className="size-4" />
            },
        ]
    },
    {
        title: 'Cources',
        items: [
            {
                label: 'Cources',
                href: '/cources',
                icon: <GraduationCap strokeWidth={2} className="size-4" />
            },
            {
                label: 'My Cources',
                href: '/my-cources',
                icon: <BookOpenCheck strokeWidth={2} className="size-4" />
            },
            {
                label: 'Self Assessment',
                href: '/self-assessment',
                icon: <PencilLine strokeWidth={2} className="size-4" />
            }
        ]
    },
    {
        title: 'Network',
        items: [
            {
                label: 'Planets',
                href: '/planets',
                icon: <Atom strokeWidth={2} className="size-4" />
            },
            {
                label: 'New Planet',
                href: '/new-planet',
                icon: <CircleFadingPlus strokeWidth={2} className="size-4" />
            }
        ]
    },
    {
        title: 'Collections',
        items: [
            {
                label: 'Book Marks',
                href: '/bookmarks',
                icon: <Bookmark strokeWidth={2} className="size-4" />
            },
            {
                label: 'Liked Posts',
                href: '/liked-posts',
                icon: <Heart strokeWidth={2} className="size-4" />
            }
        ]
    }
];
