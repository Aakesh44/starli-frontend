"use client";

import { ArrowRight, Search, SquarePen, Tags, Users } from 'lucide-react';
import React, { FormEvent, SubmitEventHandler, useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export const options = [
    { text: "People", icon: <Users /> },
    { text: "Posts", icon: <SquarePen /> },
    // { text: "Tags", icon: <Tags /> }
] as const;

const SearchForm = () => {

    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const [activeTab, setActiveTab] = useState<typeof options[number]["text"]>(options[0]["text"]);
    const router = useRouter();
    const params = useSearchParams();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        // Handle search logic here, using `query` and `activeTab`
    }

    useEffect(() => {
        const newParams = new URLSearchParams();
        newParams.set('type', activeTab.toLowerCase());
        newParams.set('q', debouncedQuery);
        router.push(`/search?${newParams.toString()}`);
    }, [activeTab, router, debouncedQuery]);

    useEffect(() => {
        const typeParam = params.get('type');
        const qParam = params.get('q');
        if (typeParam && options.some(option => option.text.toLocaleLowerCase() === typeParam.toLocaleLowerCase())) {
            setActiveTab(options.find(option => option.text.toLocaleLowerCase() === typeParam.toLocaleLowerCase())!.text);
        }
        if (qParam) {
            setQuery(qParam);
        }

    }, [params.get('type'), params.get('q')]);

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full h-26 shrink-0 p-2 px-4 bg-slate-50 rounded-md rounded-b-none border-b border-border/60'>

            <div className='w-full h-1/2 flex items-center justify-start gap-2 bg-amber-300.'>
                <Search strokeWidth={2} className="size-5" />
                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search for posts or people'
                    className='outline-0 border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:border-0'
                />
            </div>

            <div className='w-full h-1/2 flex items-center justify-between bg-yellow-200.'>

                <div className='w-2/3 h-full bg-pink-2000'>
                    <div className='relative w-full h-10 flex items-center justify-center gap-1 shrink-0 border border-border rounded-lg overflow-hidden bg-white'>

                        {options.map((option, ind) => {
                            return (
                                <Button
                                    key={ind} type='button'
                                    variant={"unstyled"}
                                    onClick={() => setActiveTab(option.text)}
                                    className={cn('z-20 bg-white. w-1/2 h-full', option.text === activeTab ? 'text-primary' : 'text-secondary-foreground hover:text-primary-foreground')}
                                >
                                    {option.icon}
                                    {option.text}
                                </Button>
                            )
                        })}

                        <div
                            className='absolute inset-1 h-full. p-1 transition-transform duration-200 ease-in-out bg-black rounded-md'
                            style={{
                                width: `calc(${Math.floor(100 / options.length)}% - 2px)`,
                                transform: `translateX(${options.findIndex((t) => t.text === activeTab) * 100}%)`,
                            }}
                        >
                        </div>

                    </div>
                </div>

                <Button type='submit' variant={"default"} className='w-10 p-0 aspect-square hidden'>
                    <ArrowRight className='size-5' />
                </Button>

            </div>

        </form>
    );
};

export default SearchForm;