import { Atom, Bookmark, BookOpenCheck, CalendarClock, CheckSquare, CircleFadingPlus, Flame, GraduationCap, Heart, MessageCircleMore, NotebookPen, PencilLine, Search, Target, Zap } from 'lucide-react';

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
        title: 'Planner',
        theme: "text-indigo-400",
        items: [
            {
                label: 'Todo List',
                href: '/todos',
                icon: <CheckSquare strokeWidth={2} className="size-4" />
            },
            {
                label: 'Assignments', // Specifically for the LMS side
                href: '/assignments',
                icon: <CalendarClock strokeWidth={2} className="size-4" />
            },
            {
                label: 'Daily Goals',
                href: '/goals',
                icon: <Target strokeWidth={2} className="size-4" />
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
                label: 'Bookmarks',
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
