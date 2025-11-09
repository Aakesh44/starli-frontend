import {
    Poppins,
    Dancing_Script as DancingScript,
    Playfair_Display as Playfair,

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

export { poppins, dancingScript, playfair };
