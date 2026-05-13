import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = (
    callback: () => void,
    enabled: boolean
) => {

    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {

        if (!enabled) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) callback();
            },
            {
                rootMargin: "0px",
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.disconnect();
        }

    }, [callback, enabled]);

    return ref;
};