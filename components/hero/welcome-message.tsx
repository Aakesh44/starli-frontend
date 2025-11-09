'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const WelcomeMessage = () => {
    const { data: session } = useSession();

    return (
        <p className="font-playfair w-full text-center text-3xl leading-16 font-medium break-words [overflow-break:anywhere]">
            Welcome to Starli 🌠 {session?.user?.email}
            <span className="text-xs">
                <br className="" />
                {session?.accessToken}
                <br />
                {session?.refreshToken}
            </span>
        </p>
    );
};

export default WelcomeMessage;
