import { motion } from 'framer-motion'
import styles from '../styles/ProfileCard.module.scss'
import React, { FC, ReactNode } from 'react'
import { useColorMode } from '@chakra-ui/react'

type Children = {
    children: ReactNode | ReactNode[]
}
const AnimationWrapper = ({ children }: Children) => {
    return (
        <motion.div
            animate={{ x: '1rem' }}
            transition={{ duration: 0.75 }}
        >
            {children}
        </motion.div>
    )
}
const ProfileCard: FC = () => {
    const { colorMode } = useColorMode()
    return (
        <AnimationWrapper>
            <div className={colorMode === 'light' ?
                    styles.light : styles.dark
            }>
                hello.
            </div>
        </AnimationWrapper>
    )
}

export default ProfileCard
