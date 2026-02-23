import { ISOString } from "./common";

export interface IUser {
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
    picture: string;
    bio: null,
    cover_picture: null,
    location: string | null,
    personal_website: string | null,
    profile_tags: string[] | null,
    social_links: Record<string, string> | null,
    createdAt: ISOString,
    updatedAt: ISOString

}