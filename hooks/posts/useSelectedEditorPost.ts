import { Post } from "@/types/post";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

export type EditorPostType = 'DRAFT' | 'SCHEDULED';

export type SelectedEditorPost = {
    post?: Post | null,
    source: EditorPostType
};

const QUERY_KEY = ['selected-editor-post'] as const;

export const useSelectedEditorPost = () => {
    return useQuery<SelectedEditorPost | null>({
        queryKey: QUERY_KEY,
        queryFn: () => null, // default,
        staleTime: Infinity,
        enabled: false // disable the refetch
    })
};

export const useSetSelectedEditorPost = () => {

    const queryClient = useQueryClient();

    return (post: SelectedEditorPost) => {
        queryClient.setQueryData(QUERY_KEY, post);
    }
};


export const clearSelectedEditorPost = (queryClient: QueryClient) => {
    queryClient.setQueryData(QUERY_KEY, null);
}