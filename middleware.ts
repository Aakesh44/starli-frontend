import { withAuth } from 'next-auth/middleware';

export default withAuth({
    pages: {
        signIn: '/login',   // ← must match authOptions.pages.signIn
    },
});


export const config = {
    matcher: [
        // '/scroll',
        // '/scroll/post/:path*',
        // '/user/:path*',
        // '/bookmarks',
        // '/liked-posts',
        '/((?!login|signup|api/auth|_next/static|_next/image|favicon.ico).*)',
    ]
}