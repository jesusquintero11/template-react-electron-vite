import { useEffect } from "react"
import { themes } from "../enums/theme";

export const useApplyTheme = (theme) => {
    useEffect(() => {
        const getPreferredTheme = () => {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? themes.DARK
                : themes.LIGHT
        };

        const colorMode = () => {
            const preference = getPreferredTheme()

            let themeState = theme

            if (theme === themes.DEFAULT) {
                themeState = preference
            }

            document.documentElement.classList.remove(themes.LIGHT, themes.DARK);
            document.documentElement.classList.add(themeState);
        };

        colorMode();

    }, [theme])
}