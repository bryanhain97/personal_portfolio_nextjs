import type { NextPage } from 'next'
import { FC, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ProfileCard from '../components/ProfileCard'
import { useColorMode, Grid, GridItem } from '@chakra-ui/react'

const Home: FC<NextPage> = () => {
  const { colorMode } = useColorMode()
  useEffect(() => {
    console.log(colorMode)
  })
  return (
    <>
      <Head>
        <title>thatguybryan | Home</title>
        <link rel='icon' type='image/png' href='/favicons/favicon-16x16.png' />
        <link rel='icon' type='image/png' href='/favicons/favicon-32x32.png' />
      </Head>
      <main className={styles.container}>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={4}
        >
          <GridItem>
            <ProfileCard />
          </GridItem>
        </Grid>
      </main>
    </>
  )
}

export default Home
