import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface User extends DefaultUser {
        accessToken?: string;
        refreshToken?: string;
    }

    interface Session extends DefaultSession {
        accessToken?: string;
        refreshToken?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        user?: User;
    }
}
