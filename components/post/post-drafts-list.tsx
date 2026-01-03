import React from 'react';
import PostDraftListItem from './post-draft-list-item';
import { NotebookPen } from 'lucide-react';

const items = [
    {
        id: 1,
        title: "Project Initiation",
        description: "Define the project goals, scope, and key stakeholders to begin the development lifecycle."
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Creating high-fidelity wireframes and interactive prototypes for the mobile application."
    },
    {
        id: 3,
        title: "Database Schema",
        description: "Designing the relational database structure and defining primary keys for data integrity."
    },
    {
        id: 4,
        title: "API Integration",
        description: "Connecting the frontend interface with the backend RESTful services using secure endpoints."
    },
    {
        id: 5,
        title: "User Authentication",
        description: "Implementing OAuth2 and JWT tokens to ensure secure user login and session management."
    },
    {
        id: 6,
        title: "Performance Tuning",
        description: "Optimizing code execution and asset loading times to improve the overall user experience."
    },
    {
        id: 7,
        title: "Unit Testing",
        description: "Writing comprehensive test cases to validate individual components and business logic."
    },
    {
        id: 8,
        title: "Cloud Deployment",
        description: "Configuring CI/CD pipelines to automatically deploy the latest build to the production server."
    },
    {
        id: 9,
        title: "Security Audit",
        description: "Reviewing the codebase for potential vulnerabilities and ensuring compliance with data standards."
    },
    {
        id: 10,
        title: "Final Handover",
        description: "Delivering the project documentation and source code to the client for final approval."
    }
];

const PostDraftsList = () => {
    return (
        <div className='w-full grow max-h-[500px] flex flex-col gap-3 bg-lime-2000 overflow-y-auto scrollbar-thin scrollbar-none'>

            {items?.length === 0 && (
                <div className='w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

                    <NotebookPen className='stroke-[0.5] size-10 mb-8 text-primary-foreground/80' />

                    <p className='font-semibold'>No drafts yet!</p>

                    <p>Save up to 5 posts as drafts.</p>

                </div>
            )}

            {[...items].map((item, ind) => {
                return (
                    <PostDraftListItem key={ind} items={item} />
                )
            })}

        </div>
    );
};

export default PostDraftsList;