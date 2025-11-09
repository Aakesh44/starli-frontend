import React from 'react';
import { Button } from './button';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button
            variant="outline"
            onClick={toggleTheme}
            className="ml-auto size-7 shrink-0 rounded-lg"
        >
            <MoonStarIcon className="hidden [html.dark_&]:block" />
            <SunIcon className="hidden [html.light_&]:block" />
            <span className="sr-only">Toggle Theme</span>
        </Button>
    );
};

export default ThemeToggle;