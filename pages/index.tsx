import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import ProfileCard from '../components/ProfileCard'
// import Background from '../components/three/background';
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
import { useColorMode } from '@chakra-ui/react';
// import variables from '../styles/variables.module.scss'

// const {
//   canvasParticlesLight,
//   canvasParticlesDark
// } = variables;

const Home: FC<NextPage> = () => {
  // const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        {/* <div className={styles.canvasContainer}>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <Background color={colorMode === 'light' ? canvasParticlesLight : canvasParticlesDark} />
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
          </Canvas>
        </div> */}
        <p className={styles.placeholder}>
          i am currently working on building this website 
        </p>
      </main>
    </>
  )
}

export default Home
