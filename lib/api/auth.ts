import { signOut } from 'next-auth/react';
import api from '../api';
import { log } from '../utils';
import { IUser } from '@/types/user';

const login = async (
    email: string,
    password: string
): Promise<{ user: IUser; accessToken: string; refreshToken: string }> => {
    const res = await api.post('/api/auth/login', {
        email,
        password,
    });

    log('login res', res);

    return {
        user: res.data.user,
        accessToken: res.data.access_token,
        refreshToken: res.data.refresh_token,
    };
};

const signup = async (payload: { email: string; password: string }): Promise<{ token: string }> => {
    const res = await api.post('/api/auth/signup', payload);

    log('signup res', res);

    return res.data;
};

const verifyEmail = async (
    token: string,
    otp: string
): Promise<{ user: IUser; accessToken: string; refreshToken: string }> => {
    const res = await api.post('/api/auth/verify-email', { token, otp });
    log('verifyEmail res', res);
    return {
        user: res.data?.user,
        accessToken: res.data?.access_token,
        refreshToken: res.data?.refresh_token,
    };
};

const sendOtp = async (token: string) => {
    const res = await api.post('/api/auth/resend-otp', { token });
    log('sendOtp res', res);
    return res.data;
};

const google = async (google_token: string) => {
    const res = await api.post('/api/auth/google', { id_token: google_token });

    log('google res', res);

    return { user: res.data.user, token: res.data.token };
};

const validateEmailForPasswordReset = async (email: string) => {
    const res = await api.post('/api/auth/validate-email-for-reset-password/', { email });

    log('validateEmailForPasswordReset res', res);

    return {
        token: res.data.token,
        otp: res.data.otp,
    };
};

const verifyOtpForPasswordReset = async (token: string, otp: string) => {
    const res = await api.post('/api/auth/validate-otp/', { token, otp });
    log('verifyOtpForPasswordReset res', res);
    return res.data;
};

const resetPassword = async (token: string, password: string) => {
    const res = await api.post('/api/auth/reset-password', { token, password });
    log('resetPassword res', res);
    return res.data;
};

const logout = async () => {
    const res = await api.post('/api/auth/logout');
    log('logout res', res);

    await signOut({ callbackUrl: '/' });
    return res.data;
};

const authApi = {
    login,
    signup,
    verifyEmail,
    sendOtp,
    google,
    validateEmailForPasswordReset,
    verifyOtpForPasswordReset,
    resetPassword,
    logout,
};

export default authApi;
