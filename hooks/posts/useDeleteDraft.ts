
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DraftsAndScheduledResponse, useDraftsAndScheduledPostsQueryKey } from "./useDraftsAndScheduledPosts";
import { toast } from "sonner";
import { postApi } from '../../lib/api/post-api';

const handleDeleteDraft = async (id: string) => {

    try {
        await postApi.deleteDraft(id);
        toast.success('Draft deleted successfully.');
    } catch (error) {
        throw new Error('Error deleting draft');
    }
}

export const useDeleteDraft = () => {

    const queryClient = useQueryClient();

    return useMutation(
        {
            mutationFn: handleDeleteDraft,

            onMutate: async (draftId) => {

                await queryClient.cancelQueries({ queryKey: useDraftsAndScheduledPostsQueryKey });

                const previousData = queryClient.getQueryData(useDraftsAndScheduledPostsQueryKey);

                queryClient.setQueryData(
                    useDraftsAndScheduledPostsQueryKey,
                    (old: DraftsAndScheduledResponse) => {
                        return {
                            ...old,
                            drafts: old.drafts.filter((d) => d.id !== draftId)
                        }
                    }
                )

                return { previousData }
            },

            onError: (_, __, context) => {
                queryClient.setQueryData(
                    useDraftsAndScheduledPostsQueryKey,
                    context?.previousData
                )
            }

            // onSuccess: (_, draftId) => {
            //     queryClient.setQueryData(
            //         useDraftsAndScheduledPostsQueryKey,
            //         (old: DraftsAndScheduledResponse) => {
            //             return {
            //                 ...old,
            //                 drafts: old.drafts.filter(
            //                     (draft) => draft.id !== draftId
            //                 )
            //             }
            //         }
            //     )
            // }
        }
    )
}