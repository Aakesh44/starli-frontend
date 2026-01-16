"use client";
import React from 'react';
import LogoutButton from './logoutButton';
import LoginButton from './loginButton';
import SignupButton from './signupButton';
import { useSession } from 'next-auth/react';
import ProfileButton from './profile-button';
import GoToProfileButton from './profile-button';

const AuthButtons = () => {

    const session = useSession();

    return (
        <div className="flex items-center justify-center gap-3">

            {session.status === 'authenticated' ? (
                <GoToProfileButton />
            ) : (
                <>
                    <LoginButton />
                    <SignupButton />
                </>

            )}
        </div>
    );
};

export default AuthButtons;
