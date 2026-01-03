import type { Metadata } from 'next';
import { poppins, playfair, dancingScript, greatVibes, geistMono, ptSerif, geist } from '@/lib/fonts';
// @ts-ignore: allow side-effect CSS import without type declarations
import './globals.css';
import Providers from '@/components/providers/providers';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Starli 🌠',
    description: 'The Professional Network for builders to show & tell!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
            </head>
            <body
                className={` bg-background. text-foreground ${poppins.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable} ${geistMono.variable} ${ptSerif.variable} ${geist.variable}  antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
