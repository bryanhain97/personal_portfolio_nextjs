import { createContext, FC, ReactNode, SetStateAction, useState, Dispatch } from 'react'
import styles from '../styles/partials/_Layout.module.scss'
import Navbar from './Navbar'
import Loader, { LOADER_TRANSITION_TIME } from './Loader'
interface LAYOUT {
    children: ReactNode | ReactNode[]
}

type LoaderCtx = {
    showLoader: boolean,
    setShowLoader?: Dispatch<SetStateAction<boolean>>
}

export const LoaderContext = createContext<LoaderCtx>({ showLoader: true })


const Layout: FC<LAYOUT> = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true);
    return (
        <>
            <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
                <Loader transitionTime={LOADER_TRANSITION_TIME.SLOW} />
                <div className={styles.layoutContainer}>
                    <Navbar />
                    <main className={styles.pageContent}>
                        {children}
                    </main>
                </div>
            </LoaderContext.Provider>
        </>
    )
}

export default Layout
