import { LoginForm } from '@/components/forms/auth/login-form';
import { SignupForm } from '@/components/forms/auth/signup-form';
import React from 'react';

const page = () => {
    return (
        <main className='w-full grid place-items-center'>
            <LoginForm className='w-5/6 md:w-90'/>
        </main>
    );
};

export default page;