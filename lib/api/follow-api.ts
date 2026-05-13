import api from "../api"

const getFollow = async (params: {
    userId: string;
    type: "followers" | "following";
    limit?: number;
    cursor?: string;
}) => {
    const res = await api.get('/api/follow/', {
        params: {
            userId: params.userId,
            type: params.type,
            limit: params.limit,
            cursor: params.cursor
        }
    });

    return {
        items: res.data?.data?.items || [],
        cursor: res.data?.data?.cursor || null,
        hasMore: !!res.data?.data?.cursor
    }
};

const follow = async (followingId: string) => {
    return await api.post('/api/follow/', {
        followingId: followingId
    });
};

const unfollow = async (followingId: string) => {
    return await api.patch(`/api/follow/`,
        {
            followingId: followingId
        }
    );
};

const followApi = {
    getFollow,
    follow,
    unfollow
};

export default followApi