import React from 'react';
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from 'next-themes';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;