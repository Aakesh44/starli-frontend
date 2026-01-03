import React from 'react';

const SidebarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className='w-full grow flex flex-col gap-1 items-start justify-start overflow-y-auto bg-fuchsia-2000'
            style={{
                scrollbarWidth: "none"

            }}
        >
            {children}
        </div>
    )
}

export default SidebarContainer;