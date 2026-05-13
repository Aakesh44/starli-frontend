import { ISOString } from "./common";
import { IMedia } from "./media";

export interface IUser extends User {
    email: string;
    name: string;
    id: string;
    username: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    picture: IMedia | null;
    bio: null,
    cover_picture: IMedia | null,
    location: string | null,
    personal_website: string | null,
    profile_tags: string[] | null,
    social_links: Record<string, string> | null,
    createdAt: ISOString,
    updatedAt: ISOString

    following: boolean;
    follower: boolean;

    followings?: User[];
    followers?: User[];

    posts?: number;
}

