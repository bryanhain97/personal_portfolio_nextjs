import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import styles from '../styles/partials/_Layout.module.scss'
import { useColorMode } from '@chakra-ui/react'
interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }) => {
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <div className={styles.layoutContainer} onClick={() => toggleColorMode()}>
                {/* <Navbar /> */}
                <main className={styles.pageContent}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
