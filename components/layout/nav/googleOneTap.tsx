"use client";

import { signIn } from 'next-auth/react';
import React, { useEffect } from 'react';


const GoogleOneTap = () => {

    useEffect(() => {
        const initializeGoogleOneTap = async () => {
            if(window.google){

                window.google.accounts.id.initialize({
                    client_id: process.env.GOOGLE_CLIENT_ID,
                    callback: async () => {

                        const res = await signIn("google", {
                            redirect: false,
                        });

                        console.log('GoogleOneTap response', res);
                    },
                    auto_select: true, // Optional: automatically select the known account
                    cancel_on_tap_outside: false, // Optional: cancel the flow if the user taps outside the Google button

                });

                window.google.accounts.id.prompt();

            }
        }
    }, []);
    return null;
};

export default GoogleOneTap;