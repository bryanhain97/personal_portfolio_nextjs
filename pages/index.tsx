import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ProfileCard from '../components/ProfileCard'
// import Background from '../components/three/background';
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { useColorMode } from '@chakra-ui/react';

const Home: FC<NextPage> = () => {
  // const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <ProfileCard />
      </main>
    </>
  )
}

export default Home
