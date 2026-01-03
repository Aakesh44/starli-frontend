"use client";

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const FlipSentences = ({ sentences: s, className }: { sentences: string[], className?: string }) => {

    const sentences = s;

    const [currentSentence, setCurrentSentence] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAnimation = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSentence(prev => (prev + 1) % sentences.length);
        }, 2500)
    }, [sentences]);

    useEffect(() => {
        startAnimation();

        const abortController = new AbortController();
        const { signal } = abortController;

        document.addEventListener(
            "visibilitychange",
            () => {
                if (document.visibilityState === "visible") {
                    setCurrentSentence(prev => (prev + 1) % sentences.length);
                    startAnimation();
                } else if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            }, { signal }
        );

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            abortController.abort();
        }

    }, [sentences, startAnimation]);

    return (
        <AnimatePresence mode='wait' initial={false}>

            <motion.p
                key={`current-sentence-${currentSentence}`}
                className={cn('text-sm font- text-secondary-foreground select-none', className)}
                initial={{
                    y: 8,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                exit={{
                    y: -8,
                    opacity: 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: "linear"
                }}
            >
                {sentences[currentSentence]}
            </motion.p>
        </AnimatePresence>
    );
};

export default FlipSentences;