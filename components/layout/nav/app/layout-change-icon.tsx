"use client";
import { Button } from '@/components/ui/button';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { useAppLayoutStore } from '@/stores/useAppLayoutStore';
import { GalleryHorizontal } from 'lucide-react';
import React from 'react';

const LayoutChangeIcon = () => {

    const { toggleFixedSize: toggle } = useAppLayoutStore();

    return (
        <SimpleTooltip content={"Toggle Layout"}>

            <Button
                onClick={toggle}
                variant={"ghost"}
                size={"icon-sm"}
                className='group hover:bg-red-50.'
            >
                <GalleryHorizontal className='size-5 group-hover:scale-[0.95] group-hover:text-red-500' />
            </Button>
        </SimpleTooltip>
    );
};

export default LayoutChangeIcon;