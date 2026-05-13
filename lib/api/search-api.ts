import { Post } from "@/types/post";
import api from "../api"
import { User } from "@/types/user";

const search = async ({ q, type, cursor, limit }: {
    q: string,
    type: 'post' | 'user',
    cursor?: string,
    limit?: number
}): Promise<{ items: any[], type: string, cursor?: string, hasMore: boolean }> => {
    const res = await api.get(
        '/api/search',
        {
            params: {
                q,
                type,
                cursor,
                limit
            }
        }
    );

    console.log('⚠️⚠️searchApi search res', res);

    return {
        items: res.data?.data?.items,
        type: res.data?.data?.type,
        cursor: res.data?.data?.nextCursor,
        hasMore: res.data?.data?.hasMore
    }
}

const searchApi = {
    search
}

export default searchApi