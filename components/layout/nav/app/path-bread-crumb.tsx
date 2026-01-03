import React from 'react';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PathBreadCrumb = () => {

    const pathname = usePathname();

    return (
        <div className='font-poppins font-medium flex items-center'>
            <Breadcrumb>
                <BreadcrumbList className='flex items-center leading-0 text-black text-base'>

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">{pathname === '/' ? 'Home' : pathname?.split('/')[1]}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {/* <BreadcrumbSeparator /> */}

                </BreadcrumbList>
            </Breadcrumb>

        </div>
    );
};

export default PathBreadCrumb;