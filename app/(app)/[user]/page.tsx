import ProfileDashboard from '@/components/profile/profile-dashboard';
import ProfileSidebar from '@/components/profile/profile-sidebar';
import React from 'react';

const page = () => {
    return (
        <div className='@container w-full h-full mx-auto flex flex-col lg:flex-row items-start justify-center gap-3 bg-red-4000'>

            <ProfileDashboard />

            <ProfileSidebar />

        </div>
    );
};

export default page;