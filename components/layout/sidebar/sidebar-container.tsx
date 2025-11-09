import React from 'react';

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full grow flex flex-col gap-1 items-start justify-start overflow-y-scroll scrollbar-none' style={{ scrollbarWidth: "none" }}>
            {children}
        </div>
    )
}

export default SidebarContainer;