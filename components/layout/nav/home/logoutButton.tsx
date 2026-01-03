'use client';
import authApi from '@/lib/api/auth';
import React from 'react';

const LogoutButton = () => {
    return <button onClick={() => authApi.logout()}>Logout</button>;
};

export default LogoutButton;
