import React, { FC } from 'react';
import { Box, Button, HStack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Navbar.module.scss';
import exportedScss from '../styles/variables.module.scss';
import { NextPage } from 'next';

const {
  iconBackgroundLight,
  iconBackgroundDark,
  moonIconColor,
  sunIconColor
} = exportedScss;

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <div className={styles.container}>
        <HStack align='center'>
          <Box className={styles.nav}>
            <Link href='/'>
              <a className={styles.a}>Home</a>
            </Link>
            <Link href='/about'>
              <a className={styles.a}>About</a>
            </Link>
            <Link href='/contact'>
              <a className={styles.a}>Contact</a>
            </Link>
          </Box>
        </HStack>
        <Box className={styles.box}>
          <Button
            size='sm'
            bg={colorMode === 'light' ? iconBackgroundDark : iconBackgroundLight}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <MoonIcon color={moonIconColor} /> : <SunIcon color={sunIconColor} />}
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
