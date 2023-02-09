import { FC } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/partials/_About.module.scss'
import { useColorMode } from '@chakra-ui/react'

const About: FC<NextPage> = () => {
    const { colorMode } = useColorMode()
    return (
        <>
            <Head>
                <title>thatguybryan | About</title>
            </Head>
            <main className={styles.container}>
                <section className={styles.about}>
                    <h2 className={styles.title}>about me</h2>
                    <div className={styles.text}>
                        <p className={colorMode === 'light' ? styles.paragraphLight : styles.paragraphDark}>
                            i grew up in the beautiful city of berlin in a district called treptow-köpenick. when i grew up, i loved playing video games and do sports. my first goal was to become a professional e-sports player for a game called <i className={colorMode === 'light' ? styles.cursiveColorLight : styles.cursiveColorDark}
                            >leagueoflegends</i>. i reached place 7 in europe with my team in 3 versus 3. i figured out, that i&apos;ve always been a very competetive guy. when i was 17, i <i className={colorMode === 'light' ? styles.cursiveColorLight : styles.cursiveColorDark}>started boxing </i>because i was inspired by mike tyson. at that time, it was my biggest dream to become a professional boxer. unfortunately i couldn&apos;t fulfill my dream because of injuries i sustained from boxing. at 23, i realized that i&apos;ve got to look out for another career which would be more realistic to pursue. i searched in the internet for something which would be interesting enough so that i could dedicate myself to it and found web development.
                        </p>
                    </div>
                    <div className={styles.cv_container}>
                        <a className={styles.cv} href='/cv/cv.pdf' download>
                            Download CV
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About
