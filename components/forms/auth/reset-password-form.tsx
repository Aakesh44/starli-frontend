'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import authApi from '@/lib/api/auth';
import { log } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export default function ResetPasswordForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [passoword, setPassoword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const router = useRouter();

    const token = useSearchParams().get('token') as string | null;

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            router.back();
            return;
        }

        if (passoword.length < 8) {
            setErrors({ password: 'Password must be at least 8 characters long' });
            return;
        }
        if (passoword !== confirmPassword) {
            setErrors({ confirmPassword: 'Passwords do not match' });
            return;
        }

        try {
            await authApi.resetPassword(token, passoword);

            setErrors({});

            router.push('/login');
        } catch (error) {
            log('Error in handleResetPassword:', error);
            return;
        }
    };

    useEffect(() => {
        if (!token) {
            router.back();
        }
    }, [token]);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Card {...props}>
                <CardHeader>
                    <CardTitle className="text-center"> Reset Password</CardTitle>
                    <CardDescription>Enter your New Password and Confirm Password</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleResetPassword}>
                        <FieldGroup className="flex flex-col gap-2">
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    minLength={8}
                                    value={passoword}
                                    onChange={(e) => setPassoword(e.target.value)}
                                    required
                                />
                                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                                <FieldError>{errors.password}</FieldError>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    minLength={8}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <FieldDescription>Please confirm your password.</FieldDescription>
                                <FieldError>{errors.confirmPassword}</FieldError>
                            </Field>

                            <FieldGroup>
                                <Field>
                                    <Button type="submit">Reset Password</Button>
                                </Field>
                            </FieldGroup>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </Suspense>
    );
}
