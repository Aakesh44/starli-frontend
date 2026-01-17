import { CircleCheck } from 'lucide-react';
import React from 'react';
import { Input, inputVariants } from '../ui/input';
import { cn } from '@/lib/utils';

const SOCIAL_LINKS = [
    {
        icon: '🌠',
        link: 'github.com',
        status: true
    },
    {
        icon: '🌠',
        link: 'figma.com/@',
        status: true
    },
    {
        icon: '🌠',
        link: 'peelist.io/',
        status: true
    },
    {
        icon: '🌠',
        link: 'linkedin.com/in/',
        status: true
    },
    {
        icon: '🌠',
        link: 'twitter.com/',
        status: true
    },
    {
        icon: '🌠',
        link: 'instagram.com/',
        status: true
    },
    {
        icon: '🌠',
        link: 'dribbble.com/',
        status: true
    },


];

const SocialLinksForm = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8'>

            {SOCIAL_LINKS.map((link) => {
                return (

                    <div key={link.link} className='col-span-1 h-full grid place-items-center'>

                        <div className={cn(inputVariants({ className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring ' }))}>
                            <p className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>
                                <span>
                                    {link.icon}
                                </span>
                                {link.link}
                            </p>
                            <Input id='user_name' className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0' />
                        </div>

                    </div>
                )
            })}

        </div>
    );
};

export default SocialLinksForm;