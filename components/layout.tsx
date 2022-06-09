import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }: LAYOUT) => {
    return (
        <>
            <Navbar />
            <div className={styles.layoutContainer}>
                {children}
            </div>
        </>
    )
}

export default Layout
