import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPostDrafts } from '@/lib/api/post-api';
import { fetchPostScheduled } from '@/lib/api/post-api';
import { Post } from '@/types/post';

export const useDraftsAndScheduledPostsQueryKey = ['postDraftsAndScheduled'] as const;
export type DraftsAndScheduledResponse = {
    drafts: Post[];
    scheduled: Post[];
};

const fetchDraftsAndScheduled = async (): Promise<DraftsAndScheduledResponse> => {

    try {

        const [draftsResponse, scheduledResponse] = await Promise.all([
            fetchPostDrafts(),
            fetchPostScheduled(),
        ]);

        return {
            drafts: draftsResponse.data?.posts?.items,
            scheduled: scheduledResponse.data?.posts?.items,
        };

    } catch (error) {
        throw new Error('Error fetching drafts and scheduled posts');
    }
};

export const useDraftsAndScheduledPosts = () => {
    return useQuery({
        queryKey: useDraftsAndScheduledPostsQueryKey,
        queryFn: fetchDraftsAndScheduled,
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
};

export const useUpdateDraftsAndScheduledPosts = () => {

    const queryClient = useQueryClient();

    return (post: Post) => {
        queryClient.setQueryData(
            useDraftsAndScheduledPostsQueryKey,
            (old: DraftsAndScheduledResponse) => {

                if (!old) return old;

                const removeById = (list: Post[]) => {
                    return list.filter((p) => p.id !== post.id);
                };

                let drafts = removeById(old.drafts);
                let scheduled = removeById(old.scheduled);

                if (post.status === "DRAFT") {
                    drafts = [post, ...drafts];
                }

                else if (post.status === "SCHEDULED") {
                    scheduled = [post, ...scheduled];
                }

                return {
                    ...old,
                    drafts,
                    scheduled,
                };

            }
        );

        queryClient.invalidateQueries({
            queryKey: useDraftsAndScheduledPostsQueryKey,
            refetchType: 'inactive',
        })
    }
}

