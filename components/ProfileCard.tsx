import { motion } from 'framer-motion'
import styles from '../styles/ProfileCard.module.scss'
import { FC, ReactNode } from 'react'
import { useColorMode } from '@chakra-ui/react'
import { useTypewriter } from 'react-simple-typewriter'

type Children = {
    children: ReactNode | ReactNode[]
}
const AnimationWrapper = ({ children }: Children) => {
    return (
        <motion.div
            animate={{ x: '1rem' }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div >
    )
}


const ProfileCard: FC = () => {
    const { colorMode } = useColorMode()
    const { text } = useTypewriter({
        words: ['I am Bryan. I am a self taught developer from Berlin, Germany.'],
        loop: 1,
        typeSpeed: 70, onLoopDone: () => console.log('loopDone')
    })
    return (
        <AnimationWrapper>
            <div className={colorMode === 'light' ? styles.light : styles.dark}>
                <div className={styles.textContainer}>
                    {text}
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default ProfileCard
