"use client";
import React, { } from 'react';
import { Button } from '../ui/button';
import { Link2, TagIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import SocialLinksForm from './social-links-form';
import ProfileCoverImageEditForm from './profile-cover-image-edit-form';
import ProfileEditFormRow from './profile-edit-form-row';
import ProfileEditFormProfilePicture from './profile-edit-form-profile-picture';
import ProfileEditFormUsername from './profile-edit-form-username';
import ProfileEditFormLocation from './profile-edit-form-location';
import ProfileEditFormProfileTags from './profile-edit-form-profile-tags';
import ProfileEditFormDivider from './profile-edit-form-divider';

const ProfileEditForm = () => {

    return (
        <form className='w-full min-h-fit h-full pb-10 font-sans flex flex-col gap-8 bg-lime-3000'>

            <ProfileCoverImageEditForm />

            <ProfileEditFormRow
                label='Full name'
                description='You display name'
                id='full-name'
            >
                <Input id='full-name' className='w-full h-10' />
            </ProfileEditFormRow>

            <ProfileEditFormRow
                label='Username'
                description='A unique username for your profile'
                id='username'
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
            >

                <Textarea id='bio' className='h-full resize-none' />

            </ProfileEditFormRow>

            <ProfileEditFormRow
                label='Personal website'
                description='Your website, blog, or portfolio'
                id='personal-website'
            >
                <Input id='personal-website' className='w-full h-10' />
            </ProfileEditFormRow>

            <ProfileEditFormRow
                label='Location'
                description='Your location'
                id='location'
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

            <Button className='fixed md:static bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 w-11/12 md:w-fit md:mx-auto px-5'>
                Save
            </Button>

        </form>
    );
};

export default ProfileEditForm;