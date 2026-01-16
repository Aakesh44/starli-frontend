
import React from 'react';

const ScrollLayout = ({ children }: { children: React.ReactNode }) => {

    // return <>{children}</>

    return (
        <section className='w-full min-h-fit h-full flex rounded-b-md bg-sky-3000'>

            <div className='w-full h-full xl:w-2xl mx-auto border-x border-t border-border/60 rounded-lg overflow-hidden bg-white shadow'>
                {children}
            </div>

        </section>
    );
};

export default ScrollLayout;