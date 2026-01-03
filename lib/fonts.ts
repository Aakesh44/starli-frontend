import {
    Poppins,
    Dancing_Script as DancingScript,
    Playfair_Display as Playfair,
    Geist as GeistSans,
    Great_Vibes as GreatVibes,
    Geist_Mono as GeistMono,
    PT_Serif as PT_Serif

} from 'next/font/google';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const dancingScript = DancingScript({
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-dancing-script',
});

const playfair = Playfair({
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-playfair',
});

const geist = GeistSans({
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-geist-sans',
})

const greatVibes = GreatVibes({
    weight: ['400'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-great-vibes',
});

const geistMono = GeistMono({
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-geist-mono',
});

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-pt-serif',
});

export { poppins, dancingScript, playfair, geist, greatVibes, geistMono, ptSerif };
