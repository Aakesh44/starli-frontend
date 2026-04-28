import { Comment } from "@/types/comment";
import api from "../api";
import API_URLS from "../api-urls";
import { log } from "../utils";

export type CommentTargetType = 'POST' | 'COURSE';

export interface CreateCommentPayload {
    targetId: string;
    targetType: CommentTargetType;
    content: string;
    media: File[];
}

const createComment = async (payload: CreateCommentPayload): Promise<Comment> => {

    const response = await api.post(
        API_URLS.comment.createComment,
        payload
    );

    log('createComment response', response);

    return response.data.comment;

};

const createReply = async (payload: {
    parentId: string;
    targetId: string;
    targetType: CommentTargetType;
    content: string;
    media: File[];
}): Promise<Comment> => {

    const response = await api.post(
        API_URLS.comment.createComment,
        payload
    );

    log('createReply response', response);

    return response.data.comment;

};

const getComments = async (params: {
    cursor?: string;
    limit?: number;
    targetId: string;
    targetType: CommentTargetType,
}): Promise<{ comments: Comment[], cursor: string }> => {

    const response = await api.get(
        API_URLS.comment.getComments,
        {
            params: {
                cursor: params.cursor,
                limit: params.limit,
                targetId: params.targetId,
                targetType: params.targetType
            }
        }
    );

    log('getComments response', response);

    return {
        comments: response.data.comments ?? [],
        cursor: response.data.cursor
    };

};

const getReplies = async (params: {
    commentId: string
}): Promise<{ comments: Comment[], cursor: string }> => {
    const response = await api.get(
        API_URLS.comment.getReplies(params.commentId)
    );

    log('getReplies response', response);

    return {
        comments: response.data.replies ?? [],
        cursor: response.data.cursor
    }
};

const updateComment = async (
    params: { commentId: string; },
    payload: {
        content: string;
        media: File[];
    }
) => {

    try {

        const response = await api.put(
            API_URLS.comment.updateComment(params.commentId),
            payload
        );

        log('updateComment response', response);

        return response;

    } catch (error) {
        log('updateComment error', error);
    }

};
const deleteComment = async (params: {
    commentId: string
}) => {

    try {

        const response = await api.delete(
            API_URLS.comment.deleteComment(params.commentId)
        );

        log('deleteComment response', response);

        return response;

    } catch (error) {
        log('deleteComment error', error);
    }

};

const commentApi = {
    createComment,
    createReply,
    getComments,
    getReplies,
    updateComment,
    deleteComment,
};

export default commentApi;