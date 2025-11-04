import Link from 'next/link';
import React from 'react';

const LoginButton = () => {
    return (
        <Link href="/login" className='shrink-0 px-5 h-8 font-poppins text-sm grid place-items-center rounded-lg border border-gray-300 bg-background shadow-sm hover:shadow-md active:scale-[.98] transition-transform active:duration-75'>
            Login
        </Link>
    );
};

export default LoginButton;