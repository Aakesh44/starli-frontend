"use client";

import { Avatar, AvatarFallback, AvatarImage, ProfileImageAvatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, SimpleDropDownMenu } from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ui/theme-toggle";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, Command } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserMenu from "./user-menu";
import { useSidebarStore } from "@/stores/useSidebarStore";

const SidebarFooter = ({ className }: { className?: string }) => {

    const isSidebarOpen = useSidebarStore((state) => state.isOpen);
    const session = useSession();

    const { user } = session.data || {};

    return (
        <div
            className={cn(
                'group font-poppins bg-lime-2000 flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-md cursor-pointer text-secondary-foreground text-sm border border-transparent transition-transform overflow-hidden.',
                'hover:bg-background hover:text-primary-foreground hover:shadow-2xs. hover:border-border/60',
                isSidebarOpen ? 'aspect-square' : 'w-full',
                className
            )}

        >

            {/* <DropdownMenu>
                <DropdownMenuTrigger>{'open'}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    Hello
                </DropdownMenuContent>
            </DropdownMenu> */}

            <SimpleTooltip content={user?.name ?? 'Guest'} hidden={isSidebarOpen}>

                <SimpleDropDownMenu
                    menuContent={<UserMenu />}
                    menuContentClassName={`-mb-8 ${isSidebarOpen ? '' : 'ml-3'}`}
                    className="flex h-full w-full items-center justify-start gap-1.5 group-hover:gap-2 transition-all duration-200 focus-visible:ring-ring/50 focus-visible:ring-[2px] rounded-md overflow-hidden"
                >
                    <div>

                        <span className="px-1. bg-rose-4000 h-full aspect-square grid place-items-center group-hover:scale-[1.01].">

                            <ProfileImageAvatar
                                src={user?.image || './icons/star.png'}
                                alt={user?.name || ''}
                                className="size-5 border-0"
                            />

                            {/* <Avatar className="size-5 rounded-full overflow-hiddensm">
                                <AvatarImage
                                    src={user?.image || './icons/star.png'}
                                    alt={'profile'}
                                    className="size-full"

                                />
                                <AvatarFallback className="rounded-full">
                                    <div className="size-full rounded-full grid place-items-center font-poppins text-xl font-semibold border border-input">{user?.name?.at(0)?.toUpperCase()}</div>
                                </AvatarFallback>
                            </Avatar> */}
                        </span>

                        <p className={cn('font-medium truncate', isSidebarOpen === false ? 'hidden' : '')}>{user?.name ?? 'Guest'}</p>

                        <ChevronsUpDown className='ml-auto mr-1 size-4 text-foreground/60 group-data-[state=open]:rotate-180 transition-all cursor-pointer' />

                    </div>

                </SimpleDropDownMenu>


            </SimpleTooltip>
        </div>
    )

}

export default SidebarFooter