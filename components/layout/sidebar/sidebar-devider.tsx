import { cn } from '@/lib/utils';
import React from 'react';

const SidebarDivider = ({ className }: { className?: string }) => {
    return <div className={cn('bg-ring/50 h-px max-h-px shrink-0 w-full mx-auto', className)} />;
};

export default SidebarDivider;