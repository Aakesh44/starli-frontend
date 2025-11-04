import Link from 'next/link';
import React from 'react';

const SignupButton = () => {
    return (
        <Link href="/signup" className='shrink-0 px-4 h-8 font-poppins text-sm grid place-items-center rounded-lg border border-orange-500 shadow-sm hover:shadow-md bg-orange-400 text-gray-50 drop-shadow-xs active:scale-[.98] transition-transform active:duration-75'>
            Creare Profile
        </Link>
    );
};

export default SignupButton;