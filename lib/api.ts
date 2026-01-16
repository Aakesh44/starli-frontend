import axios from 'axios';
import { getSession } from 'next-auth/react';

let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
    accessToken = token;
};

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // withCredentials: true,
    timeout: 10000,
});

api.interceptors.request.use(async (config) => {

    if (!accessToken) {

        const session = await getSession();

        accessToken = session?.accessToken ?? null;
    }

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export default api;
