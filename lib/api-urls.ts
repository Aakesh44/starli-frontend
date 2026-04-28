const API_URLS = {
    comment: {
        createComment: `api/comment`,
        getComments: `api/comment`,
        getReplies: (commentId: string) => `api/comment/${commentId}/replies`,
        updateComment: (commentId: string) => `api/comment/${commentId}`,
        deleteComment: (commentId: string) => `api/comment/${commentId}`,
    }
};

export default API_URLS;