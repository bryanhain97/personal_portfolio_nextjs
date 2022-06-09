import { FC } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/About.module.scss'

const About: FC<NextPage> = () => {
    return (
        <>
            <Head>
                <title>thatguybryan | About</title>
            </Head>
            <main>
                about page
            </main>
        </>
    )
}

export default About
