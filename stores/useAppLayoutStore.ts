import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppLayoutState {
    isFixedSize: boolean;
    toggleFixedSize: () => void;
}

const store = create<AppLayoutState>()(
    persist(
        (set) => ({
            isFixedSize: false,
            toggleFixedSize: () => set((state) => ({ isFixedSize: !state.isFixedSize }))
        }),
        {
            name: 'app-layout-state'
        }
    )
);

export const useAppLayoutStore = () => store((state) => state);