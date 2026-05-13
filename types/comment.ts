import { User } from "./user"
import { ISOString } from "./common"
import { CommentTargetType } from "@/lib/api/comment-api"

export type Comment = {
    id: string
    author: User
    content: string
    liked: boolean
    counts: { likes: number, replies: number }
    createdAt: ISOString
    media: {
        url: string;
        type: string;
        publicId: string;
    }[];
    parentId: null | string
    targetId: string
    targetType: CommentTargetType
    updatedAt: ISOString
}