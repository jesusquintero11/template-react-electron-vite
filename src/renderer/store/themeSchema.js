import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const themeStore = create(
    persist(
        (set, get) => ({
            theme: "default",
            resolvedTheme: "light",
            changeTheme: (newTheme) => {
                if (newTheme !== get().theme) {
                    set({ theme: newTheme })
                    get().resolveTheme()
                }
            },
            resolveTheme: () => {
                const { theme } = get()
                let resolved = "light"

                if (theme === "default") {
                    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
                    resolved = isDark ? "dark" : "light"
                } else {
                    resolved = theme
                }

                set({ resolvedTheme: resolved })
            },

        }),
        {
            name: "theme",
            storage: createJSONStorage(() => localStorage),
        }
    )
)