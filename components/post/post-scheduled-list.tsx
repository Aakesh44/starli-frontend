import { ClockPlus } from 'lucide-react';
import React from 'react';
import PostScheduledListItem from './post-scheduled-list-item';

const scheduledTasks = [
    {
        id: 1,
        title: "System Maintenance",
        description: "Routine server updates and security patches application.",
        scheduled_at: "2026-01-05T09:00:00Z"
    },
    {
        id: 2,
        title: "Client Strategy Meeting",
        description: "Discussing Q1 roadmap and budget allocations with stakeholders.",
        scheduled_at: "2026-01-05T14:30:00Z"
    },
    {
        id: 3,
        title: "Newsletter Blast",
        description: "Automated distribution of the monthly product update email.",
        scheduled_at: "2026-01-06T10:00:00Z"
    },
    {
        id: 4,
        title: "Database Backup",
        description: "Full snapshot of production databases for disaster recovery.",
        scheduled_at: "2026-01-07T02:00:00Z"
    },
    {
        id: 5,
        title: "Frontend Sprint Demo",
        description: "Internal review of the new dashboard components and animations.",
        scheduled_at: "2026-01-08T16:00:00Z"
    },
    {
        id: 6,
        title: "Code Freeze",
        description: "No new features to be merged prior to the version 2.4 release.",
        scheduled_at: "2026-01-10T23:59:59Z"
    },
    {
        id: 7,
        title: "SEO Audit",
        description: "Reviewing site indexing and keyword performance metrics.",
        scheduled_at: "2026-01-12T11:15:00Z"
    },
    {
        id: 8,
        title: "User Interview #4",
        description: "Gathering feedback on the new onboarding flow from Beta Group A.",
        scheduled_at: "2026-01-13T13:00:00Z"
    },
    {
        id: 9,
        title: "API Documentation Review",
        description: "Ensuring Swagger docs are updated for the external developer portal.",
        scheduled_at: "2026-01-14T15:45:00Z"
    },
    {
        id: 10,
        title: "Quarterly Review",
        description: "Final analysis of performance KPIs for the previous quarter.",
        scheduled_at: "2026-01-15T09:30:00Z"
    }
];

const PostScheduledList = () => {
    return (
        <div className='w-full grow max-h-[500px] font-sans text-foreground flex flex-col gap-3 bg-lime-2000 overflow-y-auto scrollbar-thin scrollbar-none'>
            {scheduledTasks?.length === 0 && (
                <div className='w-full grow flex flex-col items-center justify-center gap-2 bg-fuchsia-2000'>

                    <ClockPlus className='stroke-[0.5] size-10 mb-8 text-primary-foreground/80' />

                    <p className='font-semibold'>No scheduled posts yet.</p>

                    <p>Schedule up to 5 posts in advance.</p>

                </div>
            )}

            {[...scheduledTasks].map((item, ind) => {
                return (
                    <PostScheduledListItem key={ind} scheduledTask={item} />
                )
            })}
        </div>
    );
};

export default PostScheduledList;