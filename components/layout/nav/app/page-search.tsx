"use client";

import React, { useMemo } from 'react';
import ScrollPageFilter from './scroll-page-filter';
import { usePathname } from 'next/navigation';

const filterDict: Record<string, React.ReactNode> = {
    'scroll': <ScrollPageFilter />
};

const PageSearch = () => {

    const pathname = usePathname()?.split('/')[1] || 'Home';

    const filter = useMemo(() => {
        if (!filterDict[pathname]) {
            return null;
        }
        return filterDict[pathname]
    },
        [pathname]
    );

    return (
        <div className='grow h-full flex items-center justify-center bg-pink-300'>
            {filter}
        </div>
    );
};

export default PageSearch;