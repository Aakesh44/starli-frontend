import { Comment } from "@/types/comment";
import api from "../api";
import API_URLS from "../api-urls";
import { log } from "../utils";

export type CommentTargetType = 'POST' | 'COURSE';

export interface CreateCommentPayload {
    targetId: string;
    targetType: CommentTargetType;
    content: string;
    media: File | null
};

export interface CreateReplyPayload extends CreateCommentPayload {
    parentId: string
};

const createComment = async (payload: CreateCommentPayload): Promise<Comment> => {

    const formData = new FormData();

    formData.append('targetId', payload.targetId);
    formData.append('targetType', payload.targetType);
    formData.append('content', payload.content);
    if (payload?.media) {
        formData.append('media', payload.media);
    }

    console.log('createComment formData', formData);

    const response = await api.post(
        API_URLS.comment.createComment,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );

    log('createComment response', response);

    return response.data.comment;

};

const createReply = async (payload: CreateReplyPayload): Promise<Comment> => {

    const formData = new FormData();

    formData.append('parentId', payload.parentId);
    formData.append('targetId', payload.targetId);
    formData.append('targetType', payload.targetType);
    formData.append('content', payload.content);
    if (payload?.media) {
        formData.append('media', payload.media);
    }

    const response = await api.post(
        API_URLS.comment.createComment,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );

    log('createReply response', response);

    return response.data.comment;

};

const getComments = async (params: {
    cursor?: string;
    limit?: number;
    targetId: string;
    targetType: CommentTargetType,
}): Promise<{ comments: Comment[], cursor: string, hasMore: boolean }> => {

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
        comments: response.data.comments?.items ?? [],
        cursor: response.data.comments?.cursor,
        hasMore: response.data.comments?.hasMore
    };

};

const getReplies = async (params: {
    commentId: string,
    cursor?: string
    limit?: number
}): Promise<{ comments: Comment[], cursor: string, hasMore: boolean }> => {

    const response = await api.get(
        API_URLS.comment.getReplies(params.commentId),
        {
            params: {
                cursor: params.cursor,
                limit: params.limit
            }
        }
    );

    log('getReplies response', response);

    return {
        comments: response.data.replies?.items ?? [],
        cursor: response.data.replies?.cursor,
        hasMore: response.data.replies?.hasMore
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

const addLikeToComment = async (commentId: string) => {
    const response = await api.post(`/api/comment/${commentId}/like/add`);
    log('likeToComment response', response);
    return response.data?.comment;
};

const removeLikeFromComment = async (commentId: string) => {
    const response = await api.post(`/api/comment/${commentId}/like/remove`);
    log('removeLikeFromComment response', response);
    return response.data?.comment;
}

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
    addLikeToComment,
    removeLikeFromComment,
    deleteComment,
};

export default commentApi;