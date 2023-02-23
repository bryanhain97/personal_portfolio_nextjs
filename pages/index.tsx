import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/partials/_Home.module.scss'


const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <Image className={styles.image} src='/images/me.jpeg' height='150' width='150' alt='a picture of me' />
      </main>
    </>
  )
}

export default Home
