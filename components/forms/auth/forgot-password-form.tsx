'use client';

import { cn, log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import authApi from '@/lib/api/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<'div'>) {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const { token } = await authApi.validateEmailForPasswordReset(email);

            router.push('/email-verify?token=' + token + '&type=forgot-password');
        } catch (error) {
            log('Error in handleForgotPassword:', error);
            return;
        }
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Forgot Password</CardTitle>
                    <CardDescription>
                        Enter your email address and we will send you a link to reset your password
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleForgotPassword}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <Button type="submit">Continue </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>

            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
