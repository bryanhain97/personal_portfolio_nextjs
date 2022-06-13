import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import exportedScssThemes from '../styles/variables.module.scss'

const {
    backgroundColorDark,
    backgroundColorLight,
    fontColorDarkMode,
    fontColorLightMode,
} = exportedScssThemes


const theme: ThemeConfig = extendTheme({
    initialColorMode: 'light',
    styles: {
        global: (props: any) => ({
            body: {
                color: mode(fontColorLightMode, fontColorDarkMode)(props),
                bg: mode(backgroundColorLight, backgroundColorDark)(props),
                lineHeight: 'base',
            },
        }),
    },
})

export default theme
