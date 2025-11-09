'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import authApi from '@/lib/api/auth';
import { log } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function OTPForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const type = useSearchParams().get('type') as 'signup' | 'forgot-password' | null;

    const token = useSearchParams().get('token') as string | null;

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        if (type === 'signup') {
            if (!token) {
                router.back();
                return;
            }

            try {
                const { user, accessToken } = await authApi.verifyEmail(token, otp);
                console.log('verifyEmail success', { user, accessToken });

                setError('');

                signIn('credentials', {
                    user: JSON.stringify(user),
                    accessToken,
                    refreshToken: accessToken,
                    redirect: true,
                    callbackUrl: '/',
                });

                // router.push("/login");
            } catch (error: any) {
                console.log('verifyEmail error', error);
                setError(error?.response?.data?.message);
            }
        }

        if (type === 'forgot-password') {
            if (!token) {
                router.back();
                return;
            }

            try {
                await authApi.verifyOtpForPasswordReset(token, otp);

                setError('');

                toast.success('Code verified successfully.');

                router.push('/reset-password?token=' + token);
            } catch (error) {
                log('verifyOtpForPasswordReset error', error);
                toast.error('Invalid code. Please try again.');
                return;
            }
        }
    };

    const handleResend = async () => {
        if (!token) {
            router.back();
            return;
        }

        try {
            await authApi.sendOtp(token);
            toast.success('We sent a 6-digit code to your email.');
        } catch (error: any) {
            console.log('resendEmail error', error);
            toast.error(error?.response?.data?.message);
        }
    };

    const isValid = !token || !type || (type !== 'signup' && type !== 'forgot-password');

    useEffect(() => {
        if (isValid) {
            router.push('/');
        }
    }, [isValid, router]);

    if (isValid) return null;

    return (
        <Card {...props}>
            <CardHeader>
                <CardTitle>Enter verification code</CardTitle>
                <CardDescription>We sent a 6-digit code to your email.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleVerify}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="otp">Verification code</FieldLabel>
                            <InputOTP
                                maxLength={6}
                                id="otp"
                                value={otp}
                                onChange={(value) => setOtp(value)}
                                required
                            >
                                <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            <FieldDescription>
                                Enter the 6-digit code sent to your email.
                            </FieldDescription>
                            <FieldError>{error}</FieldError>
                        </Field>
                        <FieldGroup>
                            <Button type="submit">Verify</Button>
                            <FieldDescription className="text-center">
                                Didn&apos;t receive the code?{' '}
                                <Button
                                    variant="link"
                                    type="button"
                                    className="text-foreground cursor-pointer px-0"
                                    onClick={handleResend}
                                >
                                    Resend
                                </Button>
                            </FieldDescription>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
