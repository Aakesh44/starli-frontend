import WelcomeMessage from '@/components/hero/welcome-message';

export default function Home() {
    return (
        <div className="mx-auto flex h-fit min-h-[100dvh] w-full max-w-xl shrink-0 flex-col items-center justify-center font-sans">

            {/* <WelcomeMessage /> */}

            <p className="font-playfair text-center text-5xl leading-16 font-medium">
                The Professional Network for builders to show & tell!
            </p>
        </div>
    );
}
