import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ProfileCard from '../components/ProfileCard'
import Background from '../components/three/background'
import { Canvas, Color } from '@react-three/fiber'
import { useColorMode } from '@chakra-ui/react'
import exportedCSS from '../styles/variables.module.scss'

const {
  canvasParticlesLight,
  canvasParticlesDark
}: { [key: string]: Color } = exportedCSS

const Home: FC<NextPage> = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.canvasContainer}>
          <Canvas>
            {/* <OrbitControls enableZoom={false} /> */}
            <Background color={colorMode === 'light' ? canvasParticlesLight : canvasParticlesDark} />
          </Canvas>
        </div>
        <ProfileCard />
      </main>
    </>
  )
}

export default Home
