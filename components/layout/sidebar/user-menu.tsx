import { Avatar, AvatarFallback, AvatarImage, ProfileImageAvatar } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';
import React from 'react';
import { MoonStarIcon, Monitor, SunMedium } from 'lucide-react';

const UserMenu = () => {

    const session = useSession();

    const { user } = session.data || {};


    return (
        <div className='w-[13.5rem] h-fit font-poppins font-medium text-secondary-foreground flex flex-col bg-background overflow-hidden'>

            <div className='w-full h-16 flex items-center justify-start gap-3 px-3 bg-secondary rounded-b-lg border-b border-border overflow-hidden'>

                <ProfileImageAvatar
                    src={user?.image || './icons/star.png'}
                    alt={'profile'}
                    className='size-6 border-0'
                />

                <div className='h-fit grow min-w-0 flex flex-col bg-yellow-3000'>
                    <p className='text-base font-pt-serif text-foreground w-full truncate'>{user?.name || 'Aakesh V M'}</p>
                    <p className='max-w-full text-xxs text-secondary-foreground w-full truncate'>{user?.email || 'aakeshviswanathan@gmail.commmmmm'}</p>
                </div>

            </div>

            <DropdownMenuGroup className='py-2'>

                <Link href={'/aakesh'}>
                    <DropdownMenuItem className=' cursor-pointer w-full flex group hover:gap-2.5 hover:text-foreground transition-all duration-200'>
                        <CircleUserRound className='group-hover:text-foreground size-4' />
                        Profile
                    </DropdownMenuItem>
                </Link>

            </DropdownMenuGroup>

            <DropdownMenuSeparator className='h-px my-0 bg-edge/50 w-3/4 mx-auto' />

            <DropdownMenuGroup className='py-2 space-y-2'>

                <DropdownMenuItem className='  cursor-pointer w-full flex hover:gap-2.5 hover:text-foreground transition-all duration-200'>
                    <LogOut className='group-hover:text-foreground size-4' />
                    Logout
                </DropdownMenuItem>

                <DropdownMenuItem onClick={(e) => e.preventDefault()} className=' cursor-pointer w-full h-8 flex justify-between'>

                    <div className='grow flex items-center gap-2 hover:gap-2.5 hover:text-foreground transition-all duration-200'>

                        <Palette className='group-hover:text-foreground size-4' />

                        Theme
                    </div>

                    <ThemeToggle />

                </DropdownMenuItem>
            </DropdownMenuGroup>


        </div>
    );
};

export default UserMenu;

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CircleUserRound, LogOut, Palette, UserRound } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import ThemeToggle from '@/components/ui/theme-toggle';
import Link from 'next/link';
import Header from '@/components/layout/nav/home/header';

export function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">

                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>

                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
