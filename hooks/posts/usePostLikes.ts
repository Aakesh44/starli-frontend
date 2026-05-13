import { postApi } from "@/lib/api/post-api";
import { useQuery } from "@tanstack/react-query";

export const usePostLikes = (postId: string) => {
    return useQuery({
        queryKey: ['post-likes', postId],
        queryFn: () => postApi.getPostLikes(postId),
        enabled: !!postId
    });
};