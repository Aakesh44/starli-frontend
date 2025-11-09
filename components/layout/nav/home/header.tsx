import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DeskTopNavMenu from './desktop-menu';
import AuthButtons from './auth-btns';
import Link from 'next/link';

const Header = async () => {
    const session = await getServerSession(authOptions);

    console.log(' session : ', session);

    return (
        <header
            className="glass fixed top-2 z-10 flex h-12 w-full max-w-xl items-center justify-between rounded-md bg-[linear-gradient(180deg,#FFF_19.64%,rgba(255,255,255,0)_80.36%)] px-4 backdrop-blur-[4px] lg:px-0 dark:bg-[linear-gradient(180deg,#171717_19.64%,rgba(23,23,23,0)_80.36%)] dark:backdrop-blur-[2px]"
            style={{
                mask: 'linear-gradient(black, black 80%, transparent)',
            }}
        >
            <Link
                href={'/'}
                className="font-dancing-script flex w-fit items-center text-[28px] font-bold"
            >
                🌠{' '}
                <h1 className="bg-gradient-to-tl from-yellow-600 to-orange-600 bg-clip-text text-3xl text-transparent">
                    Starli
                </h1>
            </Link>

            {/* {session?.user?.email} */}
            <DeskTopNavMenu />

            <AuthButtons />
        </header>
    );
};

export default Header;
