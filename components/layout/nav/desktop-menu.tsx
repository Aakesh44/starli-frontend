import Link from 'next/link';
import React from 'react';

const DeskTopNavMenu = () => {
    return (
        <ul className='flex items-center justify-center gap-3 font-poppins text-sm font-normal'>
            <Link href={'/dashboard'} className='hover:underline hover:underline-offset-2'>Dashboard</Link>
            <Link href={'/cources'} className='hover:underline hover:underline-offset-2'>Cources</Link>
            <Link href={'/posts'} className='hover:underline hover:underline-offset-2'>Posts</Link>
        </ul>
    );
};

export default DeskTopNavMenu;