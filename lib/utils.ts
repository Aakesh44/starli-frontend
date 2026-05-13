import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function log(...args: Parameters<typeof console.log>) {
    if (process.env.NODE_ENV === 'development') {
        console.log(...args);
    }
}

export async function copyToClipboard(content: string, toastMessage?: string) {
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        await navigator.clipboard.writeText(content);
        toast.success(toastMessage || 'Copied to clipboard!');
    }
};