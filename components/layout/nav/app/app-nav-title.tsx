import { usePathname } from 'next/navigation';
import React from 'react';
import { capitalize } from '../../../../lib/stringUtils';

const AppNavTitle = () => {

    const pathName = usePathname()?.split('/')[1] || 'Home';

    return (
        <h1 className='font-poppins flex w-fit items-center text-2xl font-semibold'>
            {capitalize(pathName)}
        </h1>
    );
};

export default AppNavTitle;