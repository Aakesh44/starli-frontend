import { Post } from "@/types/post";
import api from "../api";
import { log } from "../utils";
import { create } from 'zustand';

const getBookmarks = async (params: {
    limit?: number;
    cursor?: string;
}): Promise<{ bookmarks: Post[], cursor?: string, hasMore: boolean }> => {

    const res = await api.get('/api/bookmark/',
        {
            params: {
                limit: params.limit,
                cursor: params.cursor,
            }
        }
    );
    log('getBookmarks res', res);

    return {
        bookmarks: res.data?.bookmarks?.items ?? [],
        cursor: res.data.bookmarks?.nextCursor,
        hasMore: Boolean(res.data.bookmarks?.nextCursor),
    }

};

const createBookmark = async ({
    targetId,
    targetType = "POST",
}: {
    targetId: string;
    targetType?: string;
}) => {

    const res = await api.post('/api/bookmark/', {
        targetId,
        targetType,
    });
    log('createBookmark res', res);
    return res.data;

};

const deleteBookmark = async (id: string) => {
    const res = await api.delete(`/api/bookmark/${id}`);
    log('deleteBookmark res', res);
    return res.data;
};

const bookmarkApi = {
    getBookmarks,
    createBookmark,
    deleteBookmark,
};

export default bookmarkApi;