import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/partials/_Navbar.module.scss'
import exportedScss from '../styles/variables.module.scss';
import {
  Container,
} from '@chakra-ui/react';

const Navbar: FC = () => {
  return (
    <Container
      p='0'
      my='5'
      display='flex'
      justifyContent='center'
    >
      <Link href='/'><a className={styles.logo}>thatguybryan</a></Link>
    </Container >
  );
};

export default Navbar;
