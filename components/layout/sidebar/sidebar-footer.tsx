"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";

const SidebarFooter = ({ className }: { className?: string }) => {

    const session = useSession();
    const { user } = session.data || {};

    return (

        <div
            //   size="lg"
            className={cn("shrink-0 w-full flex items-center justify-between gap-2 px-2 py-2 pb-4 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", className)}
        >
            <Link href={'/star'} className='flex items-center justify-center gap-2'>

                <Avatar className="h-8 w-8 rounded-full overflow-hiddensm bg-primary">
                    <AvatarImage src={'/icons/star.png'} alt={'profile'} />
                    <AvatarFallback className="rounded-full">•</AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium hover:pl-0.5 transition-all">{'Aakesh'}</span>
                    <span className="truncate text-xs hover:pl-0.5 transition-all">{'Aakesh@gmail.com'}</span>
                </div>

            </Link>

            <ThemeToggle />

        </div>

        // </div>
    );
};
export default SidebarFooter;