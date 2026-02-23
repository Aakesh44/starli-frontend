import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, deleay = 500): T {

    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, deleay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, deleay]);

    return debouncedValue;
}