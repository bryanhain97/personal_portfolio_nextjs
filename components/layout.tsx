import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/partials/_Layout.module.scss'

interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }) => {
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
