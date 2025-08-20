// No elimine este import, es necesario para el manejo de temas
import { ThemeApp } from "./theme/themeApp"
// -----------------------------------------------------------
import { SunMoon, SunMedium, Moon } from "lucide-react"
import { clsxMerge } from "./utils/clsxMerge"
import { themeStore } from "./store/themeSchema"
import { themes } from "./enums/theme"

const App = () => {
    const { theme, changeTheme } = themeStore()

    return (
        <ThemeApp>
            <div className="w-full h-dvh flex flex-col justify-center gap-8 dark:bg-[#1a1a1a]">
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="aspect-square w-32 flex items-center justify-center">
                        <img src="/vite.svg" alt="vite" className="aspect-square w-full p-4" />
                    </div>
                    <div className="aspect-square w-32 flex items-center justify-center">
                        <img src="/react.svg" alt="react" className="aspect-square w-full p-4" />
                    </div>
                    <div className="aspect-square w-32 flex items-center justify-center">
                        <img src="/electron.svg" alt="react" className="aspect-square w-full p-4" />
                    </div>
                    <div className="aspect-square w-32 flex items-center justify-center">
                        <img src="/tailwind.svg" alt="tailwind" className="aspect-square w-full p-4" />
                    </div>
                </div>

                <h1 className="text-center text-4xl font-bold dark:text-[#a1a1aa]">Vite + React + Electron + Tailwind</h1>

                <div className="flex justify-center">
                    <div className="flex gap-2 border rounded-full p-0.5 dark:text-[#a1a1aa]">
                        <button onClick={() => changeTheme(themes.DARK)}
                            className={clsxMerge(
                                "flex justify-center items-center rounded-full p-0.5",
                                { "bg-amber-400 text-[#0f0f0f]": theme === themes.DARK }
                            )}>
                            <Moon size={25} />
                        </button>
                        <button onClick={() => changeTheme(themes.DEFAULT)}
                            className={clsxMerge(
                                "flex justify-center items-center rounded-full p-0.5",
                                { "bg-amber-400": theme === themes.DEFAULT }
                            )}>
                            <SunMoon size={25} />
                        </button>
                        <button onClick={() => changeTheme(themes.LIGHT)}
                            className={clsxMerge(
                                "flex justify-center items-center rounded-full p-0.5",
                                { "bg-amber-400": theme === themes.LIGHT }
                            )}>
                            <SunMedium size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </ThemeApp>
    )
}

export default App