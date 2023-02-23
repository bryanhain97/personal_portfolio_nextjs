import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/partials/_Home.module.scss'
import GitGraph from '../components/GitGraph'
// import Text from '../components/CustomText';

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src='/images/me.jpeg' height='200' width='200' alt='a picture of me' />
        </div>
        <GitGraph />
      </main>
    </>
  )
}

export default Home
