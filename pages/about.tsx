import { FC, useContext } from 'react'
import { ColorTheme } from '../components/context/colorTheme'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/About.module.scss'

const About: FC<NextPage> = () => {
    const lightMode = useContext(ColorTheme)
    console.log(lightMode)
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
