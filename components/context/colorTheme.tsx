import { createContext, useState, ReactNode } from 'react'


type Children = {
    children: ReactNode | ReactNode[]
}
interface ColorThemeCtx {
    lightMode: boolean
    setLightMode: any
}
export const ColorTheme = createContext<ColorThemeCtx | null>(null)
const ThemeContext = ({ children }: Children) => {
    const [lightMode, setLightMode] = useState<boolean>(false)
    return (
        <ColorTheme.Provider value={{ lightMode, setLightMode }}>
            {children}
        </ColorTheme.Provider>
    )
}

export default ThemeContext
