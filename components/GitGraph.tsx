import { ReactNode } from 'react';
import styles from '../styles/partials/_GitGraph.module.scss';
import { motion } from 'framer-motion';


export default function GitGraph({
    children,
    ...props
}: {
    children: ReactNode,
    props?: any
}) {
    return (
        <motion.div {...props}>
            {children}
        </motion.div>
    )
}
