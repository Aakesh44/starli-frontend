import { postApi } from "@/lib/api/post-api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const usePost = (postId: string) => {
    return useQuery({
        queryKey: ['post', postId],
        queryFn: () => postApi.getPostById(postId),
        enabled: !!postId
    })
};