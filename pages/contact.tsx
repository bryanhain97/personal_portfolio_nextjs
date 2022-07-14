import { FC } from 'react'
import { NextPage } from 'next'
import styles from '../styles/partials/_Contact.module.scss';
import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/react'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'

const Contact: FC<NextPage> = () => {
    const protocol = 'https://www.'
    return (
        <>
            <Head>
                <title>thatguybryan | Contact</title>
            </Head>
            <main className={styles.container}>
                <h2 className={styles.title}>Reach out</h2>
                <Grid
                    maxW='500px'
                    marginX='auto'
                    h='250px'
                    gap={1}
                    templateColumns='repeat(2, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    placeItems='center'
                >
                    <GridItem className={styles.twitter}>
                        <a
                            href={`${protocol}twitter.com/Bryan47588123`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TiSocialTwitter className={styles.twitter_icon} />
                        </a>
                    </GridItem>
                    <GridItem className={styles.linkedIn}>
                        <a
                            href={`${protocol}linkedin.com/in/bryan-hain-572568206`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TiSocialLinkedin className={styles.linkedIn_icon} />
                        </a>
                    </GridItem>
                    <GridItem
                        className={styles.github}
                        colSpan={2}
                    >
                        <a
                            href={`${protocol}github.com/bryanhain97`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TiSocialGithub className={styles.github_icon} />
                        </a>
                    </GridItem>
                </Grid>
            </main>
        </>
    )
}

export default Contact
