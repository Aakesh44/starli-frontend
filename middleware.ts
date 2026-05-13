export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/scroll',
        '/scroll/post/:path*',
        '/user/:path*',
        '/bookmarks',
        '/liked-posts',
        "/((?!login|api/auth|_next/static|_next/image|favicon.ico).*)",

    ]
}