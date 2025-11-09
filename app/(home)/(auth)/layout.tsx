import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="grid h-full min-h-fit w-full place-items-center pt-20">
            {children}
        </section>
    );
};

export default AuthLayout;
