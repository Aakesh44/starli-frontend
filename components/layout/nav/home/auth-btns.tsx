import React from 'react';
import LogoutButton from './logoutButton';
import LoginButton from './loginButton';
import SignupButton from './signupButton';

const AuthButtons = () => {
    return (
        <div className="flex items-center justify-center gap-3">
            <LoginButton />
            <SignupButton />
        </div>
    );
};

export default AuthButtons;
