import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
    threshold?: number;
    once?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {

    const { threshold = 0.1, once = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {

        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setIsInView(false);
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();

    }, [threshold, once]);

    return { ref, isInView };
};
