"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import React, { Suspense, useState } from 'react';

const GoogleLinkForm = ({ ...props }: React.ComponentProps<typeof Card>) => {

    const [passoword, setPassoword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Card {...props}>
                <CardHeader>
                    <CardTitle className="text-center"> Google Link</CardTitle>
                    <CardDescription>Enter your password to link your Google account</CardDescription>
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
                                <FieldError>{errors.password}</FieldError>
                            </Field>

                            <FieldGroup>
                                <Field>
                                    <Button type="submit"></Button>
                                </Field>
                            </FieldGroup>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </Suspense>
    );
};

export default GoogleLinkForm;