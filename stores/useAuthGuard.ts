import api from "@/lib/api";
import authApi from "@/lib/api/auth-api";
import { User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from 'zustand/middleware/immer'

interface AuthGuardState {
    user: User | null,
    isAuthenticated: boolean,
    login: (user: User) => void,
    updateUser: (user: User) => void
    logout: () => void
}

const useAuthGuard = create<AuthGuardState>()(
    persist(
        immer(
            (set) => ({
                user: null,
                isAuthenticated: false,
                login: (user: User) => set(() => ({ user, isAuthenticated: true, isLoading: false })),
                updateUser: (user: User) =>
                    set((state) => {
                        if (state.user) {
                            state.user.picture = user.picture;
                        }
                    }),
                logout: async () => {
                    const response = await authApi.logout();
                    set({ user: null, isAuthenticated: false });
                },
            })
        ),
        {
            name: 'auth',
        }
    )
);

export default useAuthGuard;