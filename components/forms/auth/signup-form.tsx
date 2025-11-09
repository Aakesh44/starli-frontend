'use client';

import { cn, log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import GoogleSignup from './google-signin';
import { useState, useTransition } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import authApi from '../../../lib/api/auth';

export function SignupForm({ className, ...props }: React.ComponentProps<'div'>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, startTransition] = useTransition();
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        startTransition(async () => {
            try {
                const { token } = await authApi.signup({ email, password });

                router.push('/email-verify?token=' + token + '&type=signup');
            } catch (error: any) {
                if (error?.response?.data?.errors) {
                    error?.response?.data?.errors.map((error: any) => {
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            [error.field?.split('body.')?.[1]]: error.message,
                        }));
                    });
                } else if (error?.response?.data?.message) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: error?.response?.data?.message,
                    }));
                } else {
                    toast.error(error?.message);
                }

                log('Signup error', error);
            }
        });
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome To Starli🌠</CardTitle>
                    <CardDescription>Create an account to get started</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup}>
                        <FieldGroup className="flex flex-col gap-5">
                            <Field>
                                <GoogleSignup />
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                Or continue with
                            </FieldSeparator>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="m@example.com"
                                    required
                                    className="rounded-full"
                                />
                                <FieldError>{errors.email}</FieldError>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Atleast 8 characters"
                                    required
                                    className="rounded-full"
                                />
                                <FieldError>{errors.password}</FieldError>
                            </Field>
                            <Field>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="border-outline rounded-full border"
                                >
                                    {loading ? 'Loading...' : 'Create Account'}
                                </Button>
                                <FieldDescription className="text-center">
                                    Already have an account? <a href="/login">Login</a>
                                </FieldDescription>
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
