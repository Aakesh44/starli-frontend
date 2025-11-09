import { ForgotPasswordForm } from '@/components/forms/auth/forgot-password-form';
import React from 'react';

const page = () => {
    return (
        <main className="grid w-full place-items-center">
            <ForgotPasswordForm className="w-5/6 md:w-90" />
        </main>
    );
};

export default page;
