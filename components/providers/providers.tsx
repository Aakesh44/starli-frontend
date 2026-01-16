'use client';
import { SessionProvider } from 'next-auth/react';
import React, { useState } from 'react';
import GoogleOneTap from '../layout/nav/home/googleOneTap';
import { AppProgressProvider } from '@bprogress/next';
import { Toaster } from 'sonner';
import ThemeProvider from './ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: { children: React.ReactNode }) => {

    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <SessionProvider>

                <QueryClientProvider client={queryClient}>

                    <ThemeProvider>

                        <AppProgressProvider color="#ff6900" height="2px" options={{ showSpinner: false }}>
                            {children}
                        </AppProgressProvider>

                    </ThemeProvider>

                    <GoogleOneTap />

                    <Toaster position="bottom-center" expand visibleToasts={5} richColors />

                </QueryClientProvider>


            </SessionProvider>
        </>
    );
};

export default Providers;
