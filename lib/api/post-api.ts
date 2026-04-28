import { Post } from "@/types/post";
import api from "../api";
import { log } from "../utils";

export type GetPostsParams = {
    cursor?: string;
    limit?: number;
    author?: string;
    q?: string;
    tag?: string;
    filter?: "FOLLOWING" | "TRENDING" | "DRAFT" | "SCHEDULED" | "ALL";
};

export type PostSubmitStatus = 'PUBLISHED' | 'DRAFT' | 'SCHEDULED';

type PostPayload = {
    title: string;
    content: string;
    tag: string;
    media: File[];
    scheduledAt?: string;
    status: PostSubmitStatus;
};

type UpdatePostPayload = {
    id: string;
    title: string;
    content: string;
    tag: string;
    media: File[];
    scheduledAt?: string; // ISO timestamp
    status: PostSubmitStatus;
}

const getPosts = async (params: GetPostsParams): Promise<{ posts: Post[]; cursor?: string }> => {
    const res = await api.get(
        '/api/post',
        {
            params: {
                cursor: params.cursor,
                limit: params.limit,
                author: params.author,
                q: params.q,
                tag: params.tag,
                filter: params.filter,
            },
        }
    );

    log('getPosts res', res);

    return {
        posts: res.data?.posts?.items ?? [],
        cursor: res.data.posts?.nextCursor,
    };
}

const getPostById = async (id: string): Promise<{ post: Post }> => {
    const response = await api.get(`/api/post/${id}`);
    log('getPost response', response);
    return {
        post: response.data?.post,
    };
}

const createPost = async (payload: PostPayload): Promise<any> => {
    const response = await api.post('/api/post/', {
        ...payload,
    });
    log('createPost response', response);
    return response;
}

const updatePost = async (id: string, payload: UpdatePostPayload): Promise<any> => {
    const response = await api.put(`/api/post/${id}`, {
        ...payload,
    });
    log('updatePost response', response);
    return response;
}

const addLikeToPost = async (postId: string) => {
    const response = await api.post(`/api/post/${postId}/like/add`);
    log('likeToPost response', response);
    return response.data?.post;
};

const removeLikeFromPost = async (postId: string) => {
    const response = await api.post(`/api/post/${postId}/like/remove`);
    log('removeLikeFromPost response', response);
    return response.data?.post;
}


const fetchPostDrafts = async (): Promise<any> => {
    const response = await api.get('/api/post/?filter=DRAFT');
    log('fetchPostDrafts response', response);
    return response;
}

const deleteDraft = async (id: string): Promise<any> => {
    const response = await api.delete(`/api/post/${id}`);
    log('deleteDraft response', response);
    return response;
}

const fetchPostScheduled = async (): Promise<any> => {
    const response = await api.get('/api/post/?filter=SCHEDULED');
    log('fetchPostScheduled response', response);
    return response;
};

const deleteScheduledPost = async (id: string): Promise<any> => {
    const response = await api.delete(`/api/post/${id}`);
    log('deleteScheduledPost response', response);
    return response;
}

export const postApi = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    fetchPostDrafts,
    deleteDraft,
    addLikeToPost,
    removeLikeFromPost,
    fetchPostScheduled,
    deleteScheduledPost
};
