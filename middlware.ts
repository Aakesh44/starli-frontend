import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const publicRoutes = [
    '/login',
    '/signup',
    '/email-verify',
    '/forgot-password',
    '/reset-password',
];

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow public routes
    const isPublicRoute = publicRoutes.some(route =>
        pathname.startsWith(route)
    );

    if (isPublicRoute) {
        return NextResponse.next();
    }

    // Read JWT token manually
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    // Not authenticated
    if (!token) {
        const loginUrl = new URL('/login', req.url);

        loginUrl.searchParams.set('callbackUrl', pathname);

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};