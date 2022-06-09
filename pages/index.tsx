import type { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Home</title>
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
