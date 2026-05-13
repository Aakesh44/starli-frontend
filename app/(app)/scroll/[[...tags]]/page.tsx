import CreatePostFormPreview from '@/components/post/create-post/create-post-form-preview';
import CreatePostFormPreviewForm from '@/components/post/create-post/create-post-form-preview-form';
import ScrollList from '@/components/scroll/scroll-list';
import React from 'react';

const page = () => {

    return (
        <div className='w-full h-full flex flex-col overflow-y-auto scrollbar-thin'>

            <CreatePostFormPreviewForm />

            <ScrollList />

        </div>
    );

};

export default page;
