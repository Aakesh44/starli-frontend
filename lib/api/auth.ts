import { signOut } from "next-auth/react";
import api from "../api"
import { log } from "../utils";

export const login = async (email: string, password: string) => {
    const res = await api.post(
        '/api/auth/login',
        {
            email, password
        }
    );

    log('login res', res);

    return {user: res.data.user, token: res.data.token};
};

export const signup = async (payload: {email: string, password: string}) => {
    const res = await api.post(
        '/api/auth/signup',
        payload
    );
    log('signup res', res);
    return res.data;
};

export const google = async (google_token: string) => {
    
    const res = await api.post(
        '/api/auth/google',
        {id_token: google_token}
    );

    log('google res', res);

    return {user: res.data.user, token: res.data.token};
};

export const forgotPassword = async (email: string) => {
    const res = await api.post(
        '/api/auth/forgot-password',
        {email}
    );
    log('forgotPassword res', res);
    return res.data;
}

export const logout = async () => {
    const res = await api.post(
        '/api/auth/logout'
    );
    log('logout res', res);

    await signOut({callbackUrl: '/'});
    return res.data;
};