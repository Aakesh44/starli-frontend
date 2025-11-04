import {Poppins, Plus_Jakarta_Sans, Jost, IBM_Plex_Mono as FontMono, Dancing_Script as DancingScript, Playfair_Display as Playfair} from 'next/font/google';

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });
  
  const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

  const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["400", "500", "600", "800"]
  });

  const mono = FontMono({
    weight: ["400", "500", "600"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-pmono",
  });

  const dancingScript = DancingScript({
    weight: ["400", "500", "600", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-dancing-script",
  });

  const playfair = Playfair({
    weight: ["400", "500", "600", "700", '800', '900'],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-playfair",
  });

  export {
    poppins, plusJakartaSans, jost, mono, dancingScript, playfair
  }