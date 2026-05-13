import WelcomeMessage from '@/components/hero/welcome-message';

import { Badge } from '@/components/ui/badge';
import { Sparkle, Sparkles } from 'lucide-react';

export default function Home() {
    return (
        <div className="mx-auto flex h-fit min-h-[100dvh] w-full max-w-xl shrink-0 flex-col gap-10 text-center items-center justify-center font-sans">

            <Badge
                variant={'outline'}
                className="py-1.5 px-3 bg-orange-50 text-orange-700 dark:bg-blue-950 border-orange-500 dark:text-blue-300"            >
                <Sparkles className='size-4 stroke-[2.5]' />
                Now In Beta! - Welcome to Starli!
            </Badge>

            <h2 className="font-playfair text-center text-5xl leading-16 font-medium">
                Where Work <br /> Meets Wit.
            </h2>

            <p className='text-2xl'>Post freely. Connect genuinely.  Vibe professionally.</p>
        </div>
    );
}

