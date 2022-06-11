import { motion } from 'framer-motion'
import styles from '../styles/ProfileCard.module.scss'
import { FC } from 'react'
import { useColorMode } from '@chakra-ui/react'


const ProfileCard: FC = () => {
    const { colorMode } = useColorMode()
    return (
        <motion.div
            animate={{ x: '1rem' }}
            transition={{ duration: 0.75 }}
        >
            <div className={
                colorMode === 'light' ?
                    styles.light : styles.dark
            }>
                hello.
            </div>
        </motion.div>
    )
}

export default ProfileCard
