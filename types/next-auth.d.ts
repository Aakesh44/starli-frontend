import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';
import type { IUser } from './user';

declare module 'next-auth' {
    interface User extends DefaultUser, IUser {
        accessToken?: string;
        refreshToken?: string;
    }

    interface Session extends DefaultSession {
        accessToken?: string;
        refreshToken?: string;
        user?: User;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        user?: User;
    }
}
