import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppLayoutState {
    isFixedSize: boolean;
    isHydrated: boolean;
    toggleFixedSize: () => void;
    setHydrated: (val: boolean) => void;

}

const store = create<AppLayoutState>()(
    persist(
        (set) => ({
            isFixedSize: false,
            isHydrated: false,
            toggleFixedSize: () => set((state) => ({ isFixedSize: !state.isFixedSize })),
            setHydrated: (val: boolean) => set(() => ({ isHydrated: val })),
        }),
        {
            name: 'app-layout-state',
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true);
            },
        }
    )
);

export const useAppLayoutStore = () => store((state) => state);