import React from 'react';

type Props = {
    error?: string
};
const FormErrorMessage = ({
    error
}: Props) => {

    if (!error) {
        return null;
    };

    return (
        <span className='w-full text-start text-destructive text-xs'>
            {error}
        </span>
    );
};

export default FormErrorMessage;