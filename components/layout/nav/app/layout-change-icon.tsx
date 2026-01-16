"use client";
import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useAppLayoutStore } from '@/stores/useAppLayoutStore';
import { GalleryHorizontal } from 'lucide-react';
import React from 'react';

const LayoutChangeIcon = () => {

    const { toggleFixedSize: toggle } = useAppLayoutStore();

    return (
        <SimpleTooltip content={"Toggle Layout"} className='hidden lg:block'>

            <Button
                onClick={toggle}
                variant={"ghost"}
                size={"icon-sm"}
                className='hidden xl:grid group hover:bg-red-50. place-items-center'
            >
                <GalleryHorizontal className='size-5  group-hover:scale-[0.95] group-hover:text-blue-500' />
            </Button>

        </SimpleTooltip>
    );
};

export default LayoutChangeIcon;