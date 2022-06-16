import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }: LAYOUT) => {
    return (
        <>
            <div className={styles.layoutContainer}>
                <Navbar />
                <main className={styles.pageContent}>
                    {/* Insert canvas here? */}
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
