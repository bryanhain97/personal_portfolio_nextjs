import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/partials/_Navbar.module.scss'
import {
  Container,
  Text
} from '@chakra-ui/react';

const Navbar: FC = () => {
  return (
    <Container
      p='0'
      display='flex'
      justifyContent='center'
    >
      <Link href='/'>
        <a className={styles.logo}>
          <Text
            color='blue.700'
            fontSize='4xl'
            mt='7'
            letterSpacing={5}
            textTransform='uppercase'
            fontWeight='semibold'>thatguybryan</Text>
        </a>
      </Link>
    </Container >
  );
};

export default Navbar;
