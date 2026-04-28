import { User } from "./user"
import { ISOString } from "./common"
import { CommentTargetType } from "@/lib/api/comment-api"

export type Comment = {
    id: string
    author: User
    content: string
    counts: { likes: number, replies: number }
    createdAt: ISOString
    media: string;
    parentId: null | string
    targetId: string
    targetType: CommentTargetType
    updatedAt: ISOString
}