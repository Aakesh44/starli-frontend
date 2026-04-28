import { ISOString } from "./common";
import { User } from "./user";

export type Post = {
    id: string;
    author: User;
    title: string;
    content: string;
    tag: string;
    media: string[];
    liked: boolean; // true for like, false for dislike, null for no reaction
    counts: {
        comments: number;
        likes: number;
        dislikes: number;
        reshares: number;
    }
    status: 'PUBLISHED' | 'DRAFT' | 'SCHEDULED';
    isReshare: boolean;
    createdAt: ISOString;
    updatedAt: ISOString;
    scheduledAt: ISOString;
}