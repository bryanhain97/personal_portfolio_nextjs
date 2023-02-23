import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/partials/_Home.module.scss'
import GitGraph from '../components/GitGraph'
import GitBranch from '../components/GitBranch'
import { Container } from '@chakra-ui/react'

const Home: FC<NextPage> = () => {
  /**
   * useContext showLoader => staggerChildren
   */
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <Container display='flex' p='0' justifyContent='center' mt='5'>
          <Image className={styles.image} src='/images/me.jpeg' height='220' width='220' alt='a picture of me' quality='100' />
        </Container>
        <Container mt='5' p='0' display='flex' flexDirection='column' alignItems='center'>
          <GitGraph>
            <GitBranch direction='left' />
            <GitBranch direction='right' />
            <GitBranch direction='left' />
            <GitBranch direction='right' />
            <GitBranch direction='left' />
          </GitGraph>
        </Container>
      </main>
    </>
  )
}

export default Home
