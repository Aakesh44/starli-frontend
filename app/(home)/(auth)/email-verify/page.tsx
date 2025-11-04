import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const OTPForm = dynamic(() => import('@/components/forms/auth/otp-form'), {loading: () => <p>Loading...</p>, ssr: false});

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-xs">
                    <OTPForm/>
                </div>
            </div>
        </Suspense>
    );
};

export default page;