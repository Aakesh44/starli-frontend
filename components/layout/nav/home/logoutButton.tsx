'use client';
import { logout } from '@/lib/api/auth';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const LogoutButton = () => {
    return <button onClick={() => logout()}>Logout</button>;
};

export default LogoutButton;
