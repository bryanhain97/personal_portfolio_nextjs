import Navbar from './Navbar'

interface LAYOUT {
    children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LAYOUT> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer / */}
        </>
    )
}

export default Layout
