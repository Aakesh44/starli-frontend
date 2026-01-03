import React from 'react';
import { Button } from './button';
import { Monitor, MoonStarIcon, SunIcon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toggle } from './toggle';
import { cn } from '@/lib/utils';

const themes = [
    {
        value: 'dark',
        label: 'Dark',
        icon: MoonStarIcon,
    },
    {
        value: 'light',
        label: 'Light',
        icon: SunIcon,
    },
    {
        value: 'system',
        label: 'System',
        icon: Monitor,
    },
];

const ThemeToggle = () => {


    const { theme, setTheme } = useTheme();

    const toggleTheme = (theme: string) => {
        setTheme(theme);
    };

    const curIndex = themes.findIndex((t) => t.value === theme);

    return (
        <div className='relative shrink-0 w-fit ml-auto bg-secondary text-secondary-foreground border border-border rounded-md flex items-center justify-center gap-0.5'>

            <div
                className='absolute z-10 top-0 left-0 h-full transition-[left] duration-1000 ease-in-out bg-background dark:bg-primary/20 rounded-md shadow-sm'
                style={{
                    width: `${100 / themes.length}%`,
                    left: `${100 / themes.length * curIndex}%`,
                    // transform: `translate3d(${curIndex * 100}%, 0, 0)`,
                }}
            />

            {/* left: `${100 / themes.length * themes.findIndex((t) => t.value === theme)}%`, */}

            {themes.map((t) => (
                <Toggle
                    key={t.value}
                    variant={"ghost"}
                    size={"icon-xs"}
                    className=''
                    onClick={() => toggleTheme(t.value)}
                >
                    <t.icon className={cn('z-20 size-3.5 hover:text-foreground', t.value === theme ? 'text-foreground' : '')} />
                </Toggle>
            ))}

        </div>
    );
};

export default ThemeToggle;