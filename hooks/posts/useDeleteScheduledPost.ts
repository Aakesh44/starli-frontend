import { deleteScheduledPost } from "@/lib/api/post-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DraftsAndScheduledResponse, useDraftsAndScheduledPostsQueryKey } from "./useDraftsAndScheduledPosts";
import { toast } from "sonner";

const handleDeleteScheduledPost = async (id: string) => {
    try {
        await deleteScheduledPost(id);
        toast.success('Post deleted successfully!');
    } catch (error) {
        throw new Error('Error deleting scheduled post');
    }
};

export const useDeleteScheduledPost = () => {

    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: handleDeleteScheduledPost,

            onMutate: async (postId) => {

                await queryClient.cancelQueries({ queryKey: useDraftsAndScheduledPostsQueryKey });

                const previousData = queryClient.getQueryData(useDraftsAndScheduledPostsQueryKey);

                queryClient.setQueryData(
                    useDraftsAndScheduledPostsQueryKey,
                    (old: DraftsAndScheduledResponse) => {
                        return {
                            ...old,
                            scheduled: old.scheduled.filter((d) => d.id !== postId)
                        }
                    }
                )

                return { previousData };
            },

            onError: (_, __, context) => {
                queryClient.setQueryData(
                    useDraftsAndScheduledPostsQueryKey,
                    context?.previousData
                )
            }
        }
    )
}