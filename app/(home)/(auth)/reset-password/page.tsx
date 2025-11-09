import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const ResetPasswordForm = dynamic(() => import('@/components/forms/auth/reset-password-form'), {
    loading: () => <p>Loading...</p>,
});

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <main className="grid w-full place-items-center">
                <ResetPasswordForm className="flex w-5/6 flex-col gap-3 md:w-90" />
            </main>
        </Suspense>
    );
};

export default page;
