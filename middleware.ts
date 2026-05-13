import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const publicRoutes = [
    '/login',
    '/signup',
    '/email-verify',
    '/forgot-password',
    '/reset-password',
];

export default withAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized: ({ token, req }) => {
            const pathname = req.nextUrl.pathname;

            // Allow public routes
            const isPublicRoute = publicRoutes.some(route =>
                pathname.startsWith(route)
            );

            if (isPublicRoute) {
                return true;
            }

            // Protect everything else
            return !!token;
        },
    },
});

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};