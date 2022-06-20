import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import { Canvas } from '@react-three/fiber'

interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }: LAYOUT) => {
    return (
        <>
            <div className={styles.layoutContainer}>
                <Navbar />
                <main className={styles.pageContent}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
