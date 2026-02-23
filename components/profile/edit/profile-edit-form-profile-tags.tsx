import { TagIcon } from 'lucide-react';
import React from 'react';
import ChipInput from '../../ui/chip-input';
import { Controller, Form, useFormContext } from 'react-hook-form';
import { ProfileEditFormValues } from './profile-edit-schema';
import FormErrorMessage from '../../ui/form-error-message';

const ProfileEditFormProfileTags = () => {

    const { control, formState: { errors } } = useFormContext<ProfileEditFormValues>();

    return (
        <>

            <div className='w-full h-fit md:h-28 min-h-28 flex flex-col items-start justify-start gap-2 bg-cyan-2000'>
                <div className='w-full flex items-center justify-between'>
                    <p className='font-semibold w-full'>Search skills, tools, interests</p>
                    <span className='text-sm text-secondary-foreground whitespace-nowrap'>Upto 10</span>
                </div>

                <div className='w-full grow'>
                    <Controller
                        name='tags'
                        control={control}
                        render={({ field, fieldState }) => (

                            <ChipInput
                                values={field.value}
                                onChange={field.onChange}
                                max={10}
                            />
                        )}
                    />

                </div>

                <FormErrorMessage error={errors.tags?.message} />

            </div>
        </>
    );
};

export default ProfileEditFormProfileTags;