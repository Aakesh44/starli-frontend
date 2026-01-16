import api from '@/lib/api';
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { IUser } from '@/types/user';
import authApi from '@/lib/api/auth-api';

export const authOptions: NextAuthOptions = {
    providers: [
        // 🟢 google OAtuth Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",

                }
            }
        }),

        // 🟣 Credentials (Email + Password)

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'm@example.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
                user: {
                    label: 'User',
                },
                accessToken: {
                    label: 'accessToken',
                    type: 'text',
                },
                refreshToken: {
                    label: 'refreshToken',
                    type: 'text',
                },
            },
            async authorize(
                credentials:
                    | Record<'email' | 'password' | 'user' | 'accessToken' | 'refreshToken', string>
                    | undefined
            ) {
                try {
                    console.log('credentials 1', credentials);

                    if (
                        credentials?.user &&
                        credentials?.accessToken &&
                        credentials?.refreshToken
                    ) {
                        return {
                            ...(JSON.parse(credentials.user) as IUser),
                            accessToken: credentials?.accessToken,
                            refreshToken: credentials?.refreshToken,
                        };
                    }

                    console.log('credentials 2', credentials);

                    if (!credentials?.email || !credentials?.password) return null;

                    console.log('credentials 3', credentials);

                    const { user, accessToken, refreshToken } = await authApi.login(
                        credentials?.email,
                        credentials?.password
                    );

                    console.log('user', user);

                    return { ...user, accessToken: accessToken, refreshToken: refreshToken };

                } catch (error: any) {
                    console.log('Authorization error', error);

                    const { code, token } = error?.response?.data;

                    if (code === 'NOT_VERIFIED' && token) {
                        throw new Error(
                            JSON.stringify({
                                code: 'NOT_VERIFIED',
                                token,
                            })
                        );
                    }

                    throw new Error(
                        JSON.stringify({
                            code: 'AUTH_ERROR',
                            message: error?.response?.data?.message || 'Authorization failed',
                        })
                    );
                }
            },
        }),
    ],

    pages: {
        signIn: '/login',
        error: '/auth/error',
    },
    callbacks: {
        async jwt({ token, user, account }) {

            if (user) {
                token.user = user;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }

            if (account?.provider === 'google') {
                if (!account.id_token) return token;
                const { user, accessToken, refreshToken } = await authApi.google(account?.id_token);

                token.user = user as User;
                token.accessToken = accessToken as string;
                token.refreshToken = refreshToken as string;
            }

            return token;
        },
        async session({ session, token }) {
            session.user = token.user as User;
            session.accessToken = token.accessToken as string;
            session.refreshToken = token.refreshToken as string;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
