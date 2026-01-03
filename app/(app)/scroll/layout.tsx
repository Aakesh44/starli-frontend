
import React from 'react';

const ScrollLayout = ({ children }: { children: React.ReactNode }) => {

    // return <>{children}</>

    return (
        <section className='w-full min-h-fit h-full flex rounded-b-md bg-sky-3000'>

            <div className='w-full h-full lg:w-xl 2xl:w-2xl ml-60 border-x border-t border-border/60 rounded-md overflow-hidden bg-white'>
                {children}
            </div>

        </section>
    );
};

export default ScrollLayout;