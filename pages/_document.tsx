import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    /**
     * <Html>, <Head />,
     * <Main /> and <NextScript />
     *  are required for the page to be properly rendered.
     */
    return (
        <Html>
            <Head>
                <link rel='icon' type='image/png' href='/favicons/favicon-16x16.png' />
                <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
