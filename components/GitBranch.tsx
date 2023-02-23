import { DiGitBranch } from 'react-icons/di';
import styles from '../styles/partials/_GitGraph.module.scss';
import { Container } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion'

type GitBranchProps = {
    direction?: 'left' | 'right';
    color?: any;
    commitMessage?: string,
    commit?: string,
    variants?: Variants | null
}


export default function GitBranch({
    direction = 'left',
    color = '#123882',
    commitMessage = 'this is some random ass text',
    commit = '1d5f2d4',
    variants = null
}: GitBranchProps) {
    const containerProps = {
        display: 'flex',
        p: '0',
        alignItems: 'center'
    }
    const logoClass = `${styles.logo} ${direction === 'left' ? styles.branchLeft : undefined}`
    return (
        <motion.div className={styles.branchContainer}>
            <Container {...containerProps}>
                <DiGitBranch className={logoClass} style={{ color }} />
                <span className={styles.commit}>{`[${commit}]`}</span>
                <span className={styles.commitMessage}>{commitMessage}</span>
            </Container>
        </motion.div >
    )
}
