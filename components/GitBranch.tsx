import styles from '../styles/partials/_GitGraph.module.scss';
import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion'

type GitBranchProps = {
    commitMessage?: string,
    url: string
    commit?: string,
    delay?: number,
    date: Date
}


export default function GitBranch({
    commitMessage = 'this is some random ass text',
    commit = '1d5f2d4',
    url,
    delay,
    date
}: GitBranchProps) {
    const branchDate = new Date(date);

    return (
        <motion.a
            animate={{ x: [-10, 0], opacity: [0, 1], transition: { delay } }}
            href={url}
            rel='noreferrer'
            target='_blank'
            className={styles.gitBranch}>
            <Container display='flex' p='3px' alignItems='center'>
                <span className={styles.commit}>{`[${commit}]`}</span>
                <span className={styles.commitMessage}>{commitMessage}</span>
                <span className={styles.commitDate}>{branchDate.toLocaleString()}</span>
            </Container>
        </motion.a>
    )
}
