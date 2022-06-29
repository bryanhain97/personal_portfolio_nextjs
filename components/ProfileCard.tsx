import { motion } from 'framer-motion'
import styles from '../styles/partials/_ProfileCard.module.scss'
import { FC, ReactNode, useEffect, useState, useRef } from 'react'
import { useColorMode } from '@chakra-ui/react'

type Animation = {
    children: ReactNode | ReactNode[],
    delay: number,
    onAnimationComplete?: () => void
}
const AnimationWrapper: FC<Animation> = ({ delay, children, onAnimationComplete }) => {
    return (
        <motion.div
            className={styles.motionDiv}
            animate={{ x: [-16, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: delay }}
            onAnimationComplete={onAnimationComplete}
        >
            {children}
        </motion.div >
    )
}

const ProfileCard: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const textDelay = 2.5
    const getTime = () => new Date().toLocaleTimeString()
    const { colorMode } = useColorMode()
    const [time, setTime] = useState<string | null>(null)
    const [motionComplete, setMotionComplete] = useState<boolean>(false)

    useEffect(() => {
        const clock = setInterval(() => {
            setTime(getTime())
        }, 1000)
        return () => clearInterval(clock)
    }, [time])

    const onAnimationComplete = () => setMotionComplete(true)
    const removeFromDom = () => ref.current?.remove()
    return (
        <motion.div
            ref={ref}
            className={styles.profileCardContainer}
            animate={motionComplete ? { x: '100vw', opacity: [1, 0] } : undefined}
            transition={{ duration: 0.5, delay: 5 }}
            onAnimationComplete={removeFromDom}
        >
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
                        <strong>I am from Berlin and i aspire to become a creative developer.</strong>
                    </div>
                </div>
            </AnimationWrapper>
            <AnimationWrapper delay={textDelay * 2} onAnimationComplete={onAnimationComplete}>
                <div className={colorMode === 'light' ? styles.textContainerLight : styles.textContainerDark}>
                    <div className={colorMode === 'light' ? styles.textLight : styles.textDark}>
                        <strong>Currently, i am learning Blender.</strong>
                    </div>
                </div>
            </AnimationWrapper>
        </motion.div >
    )
}

export default ProfileCard
