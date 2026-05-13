import { ISOString } from "./common";
import { User } from "./user";

export type Post = {
    id: string;
    author: User;
    title: string;
    content: string;
    tag: string;
    media: {
        url: string;
        type: string;
        publicId: string;
    }[];
    isMine: boolean;
    liked: boolean; // true for like, false for dislike, null for no reaction
    bookmarked: boolean;
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