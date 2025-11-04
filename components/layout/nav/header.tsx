import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import DeskTopNavMenu from './desktop-menu';
import AuthButtons from './auth-btns';
import Link from 'next/link';

const Header = async () => {

    const session = await getServerSession(authOptions);

    console.log(' session', session);

    

    return (
        <header className='fixed top-2 z-[1] w-full max-w-xl glass h-12 flex items-center justify-between rounded-md'>
            
            <Link href={'/'} className='w-fit font-dancing-script text-[28px] font-bold flex items-center'>🌠 <h1 className='text-3xl bg-gradient-to-tl from-yellow-600 to-orange-600 bg-clip-text text-transparent'>Starli</h1></Link>

            <DeskTopNavMenu/>

            <AuthButtons/>

        </header>
    );
};

export default Header;