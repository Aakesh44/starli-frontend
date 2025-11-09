import { SignupForm } from '@/components/forms/auth/signup-form';
import React from 'react';

const page = () => {
    return (
        <main className="grid w-full place-items-center">
            <SignupForm className="w-5/6 sm:w-3/5 md:w-90" />
        </main>
    );
};

export default page;
