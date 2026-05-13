import { create } from "zustand";

interface OpenNewPostFormState {
    isOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
};

export const useOpenNewPostForm = create<OpenNewPostFormState>((set) => ({
    isOpen: false,
    openForm: () => set(() => ({ isOpen: true })),
    closeForm: () => set(() => ({ isOpen: false }))
}));