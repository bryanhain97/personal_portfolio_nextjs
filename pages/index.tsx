import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/partials/_Home.module.scss'
import GitGraph from '../components/GitGraph'
import GitBranch from '../components/GitBranch'
import { Container } from '@chakra-ui/react'

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <Container mt='5' p='0' display='flex' flexDirection='column' alignItems='center'>
          <GitGraph />
        </Container>
      </main>
    </>
  )
}

export default Home
