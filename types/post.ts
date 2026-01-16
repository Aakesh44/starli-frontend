import { User } from "./user";

export type Post = {
    id: string;
    author: User;
    title: string;
    content: string;
    tag: string;
    media: string[];
    counts: {
        comments: number;
        reshares: number;
        reactions: number;
    }
    status: 'PUBLISHED' | 'DRAFT' | 'SCHEDULED';
    isReshare: boolean;
    createdAt: string;
    updatedAt: string;
    scheduledAt: string;
}