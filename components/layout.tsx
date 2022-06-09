import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar'

interface LAYOUT {
    children: ReactNode | ReactNode[]
}

const Layout: FC<LAYOUT> = ({ children }: LAYOUT) => {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer / */}
        </>
    )
}

export default Layout
