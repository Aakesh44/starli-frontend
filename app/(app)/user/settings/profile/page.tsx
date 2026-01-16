import ProfileEditPage from '@/components/profile/profile-edit-page';
import React from 'react';

const Page = () => {
    return (
        <section className='w-full lg:w-5xl h-full mx-auto border border-border/60 bg-white rounded-lg p-5 flex flex-col overflow-y-auto scrollbar-thin'>

            <ProfileEditPage />

        </section>
    );
};

export default Page;