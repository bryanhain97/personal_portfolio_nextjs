import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.a}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={styles.a}>About</a>
                </Link>
                <Link href="/contac">
                    <a className={styles.a}>Contact</a>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
