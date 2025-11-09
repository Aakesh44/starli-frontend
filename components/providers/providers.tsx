'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import GoogleOneTap from '../layout/nav/home/googleOneTap';
import { AppProgressProvider } from '@bprogress/next';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './ThemeProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SessionProvider>

                <ThemeProvider>

                    <AppProgressProvider color="#ff6900" height="2px" options={{ showSpinner: false }}>
                        {children}
                    </AppProgressProvider>

                </ThemeProvider>

                <GoogleOneTap />

                <Toaster position="bottom-center" gutter={5} />
            </SessionProvider>
        </>
    );
};

export default Providers;
