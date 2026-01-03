'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const AuthErrorLogic = () => {
    const params = useSearchParams();
    const errorParam = params.get('error');
    const router = useRouter();

    useEffect(() => {
        let errorData: { code: string; token: string; message: string } = {
            code: '',
            token: '',
            message: '',
        };

        try {
            errorData = JSON.parse(errorParam || '');
            console.log('errorData', errorData);
        } catch (error) { }

        if (errorData.code === 'NOT_VERIFIED') {
            router.push('/email-verify?token=' + errorData.token + '&type=signup');
        } else {
            router.push('/login?error=' + (errorData.message || 'Authentication Error'));
        }
    }, [errorParam, router]);

    return <p>Loading...</p>;
};

const AuthErrorPage = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <AuthErrorLogic />
        </Suspense>
    );
};

export default AuthErrorPage;
