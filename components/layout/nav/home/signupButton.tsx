import Link from 'next/link';
import React from 'react';

const SignupButton = () => {
    return (
        <Link
            href="/signup"
            className="font-poppins grid h-8 shrink-0 place-items-center rounded-lg border border-orange-500 bg-orange-400 px-4 text-sm text-gray-50 shadow-sm drop-shadow-xs transition-transform hover:shadow-md active:scale-[.98] active:duration-75"
        >
            Creare Profile
        </Link>
    );
};

export default SignupButton;
