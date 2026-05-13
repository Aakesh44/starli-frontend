"use client";
import React, { useEffect } from 'react';
import { Button } from '../../ui/button';
import { Link2, TagIcon } from 'lucide-react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import ProfileCoverImageEditForm from './profile-cover-image-edit-form';
import ProfileEditFormRow from './profile-edit-form-row';
import ProfileEditFormProfilePicture from './profile-edit-form-profile-picture';
import ProfileEditFormUsername from './profile-edit-form-username';
import ProfileEditFormLocation from './profile-edit-form-location';
import ProfileEditFormProfileTags from './profile-edit-form-profile-tags';
import ProfileEditFormDivider from './profile-edit-form-divider';
import SocialLinksForm, { SOCIAL_LINKS } from './social-links-form';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
    profileEditSchema,
    ProfileEditFormValues
} from "./profile-edit-schema";
import { log } from '@/lib/utils';
import userApi from '@/lib/api/user-api';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';

const ProfileEditForm = () => {

    const { data: session, update } = useSession();

    const form = useForm<ProfileEditFormValues>({
        resolver: zodResolver(profileEditSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            username: "",
            bio: "",
            website: "",
            location: "",
            tags: [],
            socialLinks: {
                github: "",
                figma: "",
                peerlist: "",
                linkedin: "",
                twitter: "",
                instagram: "",
                dribbble: "",
            }
        }
    });

    const handleGetProfile = async () => {
        try {

            const res = await userApi.getUserProfile();

            const profile = res.data?.data;

            form.setValue('name', profile?.name || '');
            form.setValue('username', profile?.username || '');
            form.setValue('bio', profile?.bio || '');
            form.setValue('website', profile?.personal_website || '');
            form.setValue('location', profile?.location || 'location');
            form.setValue('tags', profile?.profile_tags || []);
            form.setValue('socialLinks', profile?.social_links || {});

        } catch (error) {
            log('handleGetProfile error', error);
        }
    }

    const handleUpdateProfile = async (values: ProfileEditFormValues) => {

        log('🟢 ', Object.entries(values));

        try {

            const res = await userApi.updateProfile({
                name: values.name,
                username: values.username,
                bio: values.bio,
                personal_website: values.website,
                location: values.location,
                profile_tags: values.tags,
                social_links: SOCIAL_LINKS.reduce((acc, link) => {
                    if (!values.socialLinks[link.name]) return acc;
                    acc[link.name] = 'https://' + link.hostname + values.socialLinks[link.name];
                    return acc;
                }, {} as Record<string, any>)
            });

            const profile = res.data?.data;

            log('🟠 ', session?.user);

            log('🟢 ', profile);


            await update({

                user: {
                    ...session?.user,
                    username: values.username,
                    name: values.name,
                    picture: profile?.picture || session?.user?.picture,
                }
            });

            toast.success('Profile updated successfully.');
            log('updateProfile response', res);

        } catch (error) {
            toast.error('Error updating profile');
            log('🔴 ', error);
        }
    }

    useEffect(() => {
        handleGetProfile();
    }, []);

    return (
        <FormProvider {...form}>

            <form
                onSubmit={form.handleSubmit((values) => {
                    handleUpdateProfile(values)
                })}
                className='w-full min-h-fit h-full pb-10 font-sans flex flex-col gap-8 bg-lime-3000'>

                <ProfileCoverImageEditForm />

                <ProfileEditFormRow
                    label='Full name'
                    description='You display name'
                    id='full-name'
                    error={form.formState.errors.name?.message}
                >
                    <Input {...form.register("name")} id='full-name' className='w-full h-10' />
                </ProfileEditFormRow>

                <ProfileEditFormRow
                    label='Username'
                    description='A unique username for your profile'
                    id='username'
                    error={form.formState.errors.username?.message}
                >
                    <ProfileEditFormUsername />

                </ProfileEditFormRow>

                <ProfileEditFormRow
                    label='Profile Photo'
                    description='You profile photo'
                    className='md:h-28'
                >
                    <ProfileEditFormProfilePicture />

                </ProfileEditFormRow>

                <ProfileEditFormRow
                    label='About you'
                    description='Write a description of yourself'
                    id='bio'
                    className='md:h-28'
                    error={form.formState.errors.bio?.message}
                >

                    <Textarea {...form.register("bio")} id='bio' className='h-full resize-none' />

                </ProfileEditFormRow>

                <ProfileEditFormRow
                    label='Personal website'
                    description='Your website, blog, or portfolio'
                    id='personal-website'
                    error={form.formState.errors.website?.message}
                >
                    <Input {...form.register("website")} id='personal-website' className='w-full h-10' />
                </ProfileEditFormRow>

                <ProfileEditFormRow
                    label='Location'
                    description='Your location'
                    id='location'
                    error={form.formState.errors.location?.message}
                >
                    <ProfileEditFormLocation />
                </ProfileEditFormRow>

                <ProfileEditFormDivider
                    title='PROFILE TAGS'
                    icon={<TagIcon className="size-5 stroke-[2.5] rotate-90" />}
                />

                <ProfileEditFormProfileTags />

                <ProfileEditFormDivider
                    title='SOCIAL LINKS'
                    icon={<Link2 className="size-5 stroke-[2.5] -rotate-45" />}
                />

                <SocialLinksForm />

                <Button
                    type='submit'
                    className='fixed md:static bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 w-11/12 md:w-fit md:mx-auto px-10'
                >
                    Save
                </Button>

            </form>

        </FormProvider>
    );
};

export default ProfileEditForm;