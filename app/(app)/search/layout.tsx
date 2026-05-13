import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-full min-h-fit h-full flex rounded-b-md bg-sky-3000'>

            <div className='w-full h-full md:w-5/6 lg:w-xl xl:w-xl mx-auto border-x border-t border-border/60 rounded-lg overflow-hidden bg-white shadow'>

                {children}
            </div>

        </section>
    );
};

export default Layout;