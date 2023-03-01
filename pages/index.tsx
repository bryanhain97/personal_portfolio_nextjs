import { NextPage } from 'next'
import Image from 'next/image'
import { FC } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import ProfileCard from '../components/ProfileCard'
import GitGraph from '../components/GitGraph'
import EmailModal from '../components/EmailModal'
import styles from '../styles/partials/_Home.module.scss';

const Home: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>thatguybryan | Homepage</title>
      </Head>
      <Box
        p='0'
        display='flex'
        flexDir='column'
        alignItems='center'
        gap={5}
      >
        <ProfileCard />
        <div className={styles.contentContainer}>
          <Image
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=bryanhain97&layout=compact'
            alt='github stats'
            width='450'
            height='250'
          />
          <GitGraph />
          <EmailModal />
        </div>
      </Box>
    </>
  )
}

export default Home
