"use client";
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import GoogleOneTap from '../layout/nav/googleOneTap';
import { AppProgressProvider } from '@bprogress/next';

const Providers = ({children}:{children: React.ReactNode}) => {
    return (
        <>
            <SessionProvider>
                
                <AppProgressProvider
                    color='#ff6900'
                    height='2px'
                    options={{showSpinner: false}}
                >

                    {children}
                </AppProgressProvider>

                <GoogleOneTap/>
            </SessionProvider>
        </>
    );
};

export default Providers;