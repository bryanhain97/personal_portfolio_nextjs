import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import exportedScssThemes from '../styles/variables.module.scss'

const {
    backgroundColorDark,
    backgroundColorLight,
    fontColorDarkMode,
    fontColorLightMode,
    fontFamily
} = exportedScssThemes


const theme: ThemeConfig = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                fontFamily: fontFamily,
                color: mode(fontColorDarkMode, fontColorLightMode)(props),
                bg: mode(backgroundColorDark, backgroundColorLight)(props),
                lineHeight: 'base',
            },
        }),
    }
})

export default theme
