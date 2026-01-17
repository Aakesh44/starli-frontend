import ProfileEditForm from '@/components/profile/profile-edit-form';
import React from 'react';

const Page = () => {
    return (
        <section className='container w-full xl:w-5xl h-full mx-auto border border-border/60 bg-white rounded-lg p-5 flex flex-col overflow-y-auto scrollbar-thin'>

            <ProfileEditForm />

        </section>
    );
};

export default Page;