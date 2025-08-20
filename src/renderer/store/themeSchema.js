import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const themeStore = create(
    persist(
        (set) => ({
            theme: "default",
            changeTheme: (newTheme) =>
                set((state) => {
                    if (newTheme !== state.theme) {
                        return { theme: newTheme }
                    }
                    return state
                }),
        }),
        {
            name: "theme",
            storage: createJSONStorage(() => localStorage),
        }
    )
)