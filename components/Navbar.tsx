import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/partials/_Navbar.module.scss'
import exportedScss from '../styles/variables.module.scss';
import {
  Box,
  Container,
  Flex,
} from '@chakra-ui/react';

const { navHeight } = exportedScss;

const Navbar: FC = () => {
  return (
    <Container
      my='1.5rem'
      p='0'
      display='flex'
      justifyContent='center'
      height={navHeight}
    >
      <Flex
        minWidth='max-content'
        alignItems='center'
      >
        <Box className={styles.box}>
          <Link href='/'><a className={styles.logo}>thatguybryan</a></Link>
        </Box>
      </Flex>
    </Container >
  );
};

export default Navbar;
