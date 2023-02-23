/* eslint-disable no-use-before-define */
import styles from '../styles/partials/_Loader.module.scss';
import { useRef, useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoaderContext } from './layout';
import { start } from 'repl';
import { transition } from '@chakra-ui/react';


export const LOADER_TRANSITION_TIME = {
    FAST: 0.25,
    NORMAL: 0.33,
    SLOW: 0.45
} as const;
const Loader = ({
    transitionTime = LOADER_TRANSITION_TIME.FAST,
}: {
    transitionTime?: number,
}) => {
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const ctx = useContext(LoaderContext)
    const startExperience = () => ctx.setShowLoader!(false);
    return (
        <AnimatePresence>
            {
                ctx.showLoader &&
                <motion.div
                    ref={loaderRef}
                    className={styles.loader}
                    onAnimationEnd={() => loaderRef.current!.style.display = 'none'}
                    exit={{ x: [0, -50, 1000] }}
                    transition={{ duration: 0.55 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.5 }}
                        onClick={startExperience}
                        className={styles.button}
                    >
                        start
                    </motion.button>
                </motion.div>
            }
        </AnimatePresence>
    )
}


export default Loader;
