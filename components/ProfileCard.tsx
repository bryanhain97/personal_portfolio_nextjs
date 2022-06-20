import { motion } from 'framer-motion'
import styles from '../styles/ProfileCard.module.scss'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useColorMode } from '@chakra-ui/react'

type Animation = {
    children: ReactNode | ReactNode[],
    delay: number
}
const AnimationWrapper = ({ children, delay }: Animation) => {
    return (
        <motion.div
            className={styles.motionDiv}
            animate={{ x: [-16, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: delay }}
        >
            {children}
        </motion.div >
    )
}

const ProfileCard: FC = () => {
    const textDelay = 2.5
    const getTime = () => new Date().toLocaleTimeString()
    const { colorMode } = useColorMode()
    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        const clock = setInterval(() => {
            setTime(getTime())
        }, 1000)
        return () => clearInterval(clock)
    }, [time])

    return (
        <>
            {/* <div className={colorMode === 'light' ?
                styles.profileCardContainer_light :
                styles.profileCardContainer_dark
            }> */}
            <sup className={colorMode === 'light' ? styles.clockLight : styles.clockDark}>{time}</sup>
            <AnimationWrapper delay={textDelay * 0}>
                <div className={colorMode === 'light' ? styles.textContainerLight : styles.textContainerDark}>
                    <div className={colorMode === 'light' ? styles.textLight : styles.textDark}>
                        <strong>Hello, i am Bryan.</strong>
                    </div>
                </div>
            </AnimationWrapper>
            <AnimationWrapper delay={textDelay * 1}>
                <div className={colorMode === 'light' ? styles.textContainerLight : styles.textContainerDark}>
                    <div className={colorMode === 'light' ? styles.textLight : styles.textDark}>
                        <strong>I am a front end developer from Berlin, Germany.</strong>
                    </div>
                </div>
            </AnimationWrapper>
            <AnimationWrapper delay={textDelay * 2}>
                <div className={colorMode === 'light' ? styles.textContainerLight : styles.textContainerDark}>
                    <div className={colorMode === 'light' ? styles.textLight : styles.textDark}>
                        <strong>Currently, i am learning 3D animation rendering.</strong>
                    </div>
                </div>
            </AnimationWrapper>
            {/* </div> */}
        </>
    )
}

export default ProfileCard
