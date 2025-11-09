import Link from 'next/link';
import React from 'react';

const DeskTopNavMenu = () => {
    return (
        <ul className="font-poppins flex items-center justify-center gap-3 text-sm font-normal">
            <Link href={'/scroll'} className="hover:underline hover:underline-offset-2">
                Scroll
            </Link>
            <Link href={'/cources'} className="hover:underline hover:underline-offset-2">
                Cources
            </Link>
            <Link href={'/starlight'} className="hover:underline hover:underline-offset-2">
                Starlight
            </Link>
        </ul>
    );
};

export default DeskTopNavMenu;
