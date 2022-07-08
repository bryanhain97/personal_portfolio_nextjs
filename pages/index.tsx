import { NextPage } from 'next'
import { FC, Suspense } from 'react'
import Head from 'next/head'
import styles from '../styles/partials/_Home.module.scss'
import ProfileCard from '../components/ProfileCard'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {
  // Donut,
  Hamburger,
  Loader
} from '../components/three'


const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.canvasContainer}>
          <Canvas
            onCreated={(canvasCtx) => {
              console.log(canvasCtx)
              canvasCtx.gl.physicallyCorrectLights = true;
              canvasCtx.setDpr(Math.min(window.devicePixelRatio, 2))
            }}
          >
            <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} />
            <ambientLight args={[0xffffff, 0.1]} />
            <directionalLight args={[-0.3, 2]} />
            <Hamburger />
            {/* <Donut /> */}
            </Suspense>
          </Canvas>
        </div>
        <ProfileCard />
      </main>
    </>
  )
}

export default Home
