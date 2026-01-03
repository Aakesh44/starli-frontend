import { Atom, Bookmark, BookOpenCheck, CircleFadingPlus, Flame, GraduationCap, Heart, MessageCircleMore, NotebookPen, PencilLine, Search, Zap } from 'lucide-react';

export const SIDEBAR_MENU = [
    {
        title: "Menu",
        theme: "text-amber-400",
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
        theme: "text-rose-400",
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
        theme: "text-cyan-400",
        items: [
            {
                label: 'Spaces',
                href: '/spaces',
                icon: <Atom strokeWidth={2} className="size-4" />
            },
            {
                label: 'New Space',
                href: '/new-space',
                icon: <CircleFadingPlus strokeWidth={2} className="size-4" />
            }
        ]
    },
    {
        title: 'Collections',
        theme: "text-lime-400",
        items: [
            {
                label: 'Liked Posts',
                href: '/liked-posts',
                icon: <Heart strokeWidth={2} className="size-4" />
            },
            {
                label: 'Book Marks',
                href: '/bookmarks',
                icon: <Bookmark strokeWidth={2} className="size-4" />
            },
            {
                label: 'Notes',
                href: '/notes',
                icon: <NotebookPen strokeWidth={2} className="size-4" />
            }
        ]
    }
];
