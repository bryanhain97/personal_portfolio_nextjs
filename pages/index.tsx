import type { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Home</title>
        <link rel='icon' type='image/png' href='/favicons/favicon-16x16.png'/>
        <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png'/>
      </Head>
      <main>
        <p className={styles.placeholder}>
          thatguybryan.com | This website is getting a full update soon.
        </p>
      </main>
    </>
  )
}

export default Home
