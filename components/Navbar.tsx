import React, { FC } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/'>
          <a className={styles.a}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={styles.a}>About</a>
        </Link>
        <Link href='/contact'>
          <a className={styles.a}>Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
