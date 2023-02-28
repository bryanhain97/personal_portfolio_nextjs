import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/partials/_Home.module.scss'
import GitGraph from '../components/GitGraph'
import { Container } from '@chakra-ui/react'
import EmailModal from '../components/EmailModal'

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <Container mt='5' mx='0' p='0' >
          <GitGraph />
          <EmailModal />
        </Container>
      </main>
    </>
  )
}

export default Home
