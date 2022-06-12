import { FC } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Contact: FC<NextPage> = () => {
    return (
        <>
            <Head>
                <title>thatguybryan | Homepage</title>
                <link rel='icon' type='image/png' href='/favicons/favicon-16x16.png' />
                <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png' />
            </Head>
            <main>
                Hello from contact
            </main>
        </>
    )
}

export default Contact
