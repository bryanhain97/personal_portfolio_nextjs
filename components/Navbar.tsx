import React, { FC } from 'react';
import { Box, Button, HStack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className={styles.container}>
      <HStack
        align='center'
      >
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
          bg={colorMode === 'light' ? '#eeeeee' : '#4C5B5C'}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <MoonIcon color='#011638' /> : <SunIcon color='#FDFF4C' />}
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
