import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/layout'
import theme from '../components/Theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <NextNProgress />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
