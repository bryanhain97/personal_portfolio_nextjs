import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/partials/_Home.module.scss'


const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
      </main>
    </>
  )
}

export default Home
