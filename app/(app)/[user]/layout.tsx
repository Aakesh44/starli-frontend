import React from 'react';

const Profielayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-full min-h-fit h-full flex rounded-b-xl bg-sky-3000'>

            {children}

        </section>
    );
};

export default Profielayout;