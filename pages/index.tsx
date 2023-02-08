import { NextPage } from 'next'
import { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/partials/_Home.module.scss'
import { motion, Variants } from 'framer-motion'
import { useColorMode } from '@chakra-ui/react'



const Home: FC<NextPage> = () => {
  const c = useColorMode();
  const parentVariant: Variants = {
    animate: {
      transition:
        { staggerChildren: 2 }
    }
  }
  const childrenVariant: Variants = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
  }
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <main className={styles.container}>
        <motion.div variants={parentVariant} initial='initial' animate='animate'>
          <motion.div variants={childrenVariant} transition={{ duration: 1 }}>
            <h1 className={c.colorMode === 'dark' ? styles.headline1_dark : styles.headline1_light}>Hi, this is Bryan 👋</h1>
          </motion.div>
          <motion.div variants={childrenVariant} transition={{ duration: 1 }}>
            <h1 className={c.colorMode === 'dark' ? styles.headline2_dark : styles.headline2_light}>A creative developer from Berlin.</h1>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}

export default Home


// const { colorMode } = useColorMode()
/* <div className={styles.canvasContainer}>
  <Canvas
    onCreated={(canvasCtx) => {
      canvasCtx.gl.physicallyCorrectLights = true;
      canvasCtx.setDpr(Math.min(window.devicePixelRatio, 2))
    }}
  >
    <OrbitControls enableZoom={false} />
    <ambientLight args={[0xffffff, 1]} />
    <directionalLight args={[0xffffff, 1]} />
    {colorMode === 'light' ? <Hamburger /> : <Donut />}
  </Canvas>
</div> */
/* <ProfileCard /> */
