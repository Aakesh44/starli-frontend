import { CircleCheck, CircleX } from 'lucide-react';
import React from 'react';
import { Input, inputVariants } from '../../ui/input';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { ProfileEditFormValues } from '../edit/profile-edit-schema';
import FormErrorMessage from '../../ui/form-error-message';

export const SOCIAL_LINKS = [
    {
        name: 'github',
        icon: '🌠',
        hostname: 'github.com/',
    },
    {
        name: 'figma',
        icon: '🌠',
        hostname: 'figma.com/@',
    },
    {
        name: 'peerlist',
        icon: '🌠',
        hostname: 'peerlist.io/',
    },
    {
        name: 'linkedin',
        icon: '🌠',
        hostname: 'linkedin.com/in/',
    },
    {
        name: 'twitter',
        icon: '🌠',
        hostname: 'twitter.com/',
    },
    {
        name: 'instagram',
        icon: '🌠',
        hostname: 'instagram.com/',
    },
    {
        name: 'dribbble',
        icon: '🌠',
        hostname: 'dribbble.com/',
    },

] as const;

const SocialLinksForm = () => {

    const { register, formState: { errors } } = useFormContext<ProfileEditFormValues>();

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8'>

            {SOCIAL_LINKS.map(({
                icon, hostname, name
            }) => {
                return (

                    <div key={hostname} className='col-span-1 h-full flex flex-col items-start justify-start gap-1 bg-yellow-3000'>

                        <div
                            className={cn(inputVariants({
                                className: 'w-full h-10 p-0 flex items-center gap-0 overflow-hidden focus-within:ring has-[[aria-invalid="true"]]:ring-2 has-[[aria-invalid="true"]]:ring-red-500'
                            }))}>
                            <p className='w-fit h-full px-2 flex items-center justify-center gap-1 whitespace-nowrap bg-slate-200/50'>
                                <span>
                                    {icon}
                                </span>
                                {hostname}
                            </p>
                            <Input
                                id={`social-link-${name}`}
                                {...register(`socialLinks.${name}`)}
                                className='grow h-10 outline-none border-0 shadow-none ring-0 focus-visible:ring-0'
                                aria-invalid={errors.socialLinks?.[name] ? 'true' : 'false'}
                            />
                            <span className='ml-auto h-full aspect-square px-2 grid place-items-center bg-slate-200/500'>
                                {errors.socialLinks?.[name]?.message ?
                                    <CircleX className='text-red-500 size-4' /> :
                                    <CircleCheck className='text-green-500 size-4' />
                                }
                            </span>
                        </div>

                        <FormErrorMessage error={errors.socialLinks?.[name]?.message} />


                    </div>
                )
            })}

        </div>
    );
};

export default SocialLinksForm;