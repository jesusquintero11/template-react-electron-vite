import { themeStore } from "../store/themeSchema"
import { useApplyTheme } from "../hooks/useApplyTheme"

export const ThemeApp = ({ children }) => {
    const { theme } = themeStore()
    useApplyTheme(theme)

    return children
}