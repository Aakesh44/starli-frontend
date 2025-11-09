import Link from 'next/link';
import React from 'react';

const LoginButton = () => {
    return (
        <Link
            href="/login"
            className="font-poppins bg-background grid h-8 shrink-0 place-items-center rounded-lg border border-gray-300 px-5 text-sm shadow-sm transition-transform hover:shadow-md active:scale-[.98] active:duration-75"
        >
            Login
        </Link>
    );
};

export default LoginButton;
