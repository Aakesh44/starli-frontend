import { ResetPasswordForm } from '@/components/forms/auth/reset-password-form';
import React from 'react';

const page = () => {
    return (
        <main className='w-full grid place-items-center'>
            <ResetPasswordForm className='w-5/6 md:w-90 flex flex-col gap-3'/>
        </main>
    );
};

export default page;