import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/layout'
import ThemeContext from '../components/context/colorTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <ThemeContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext>
    </>
  )
}

export default MyApp
