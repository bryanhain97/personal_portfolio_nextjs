import { FC } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FiMenu } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Link from 'next/link';
import styles from '../styles/partials/_Navbar.module.scss'
import exportedScss from '../styles/variables.module.scss';
import {
  Box,
  Button,
  Container,
  Flex,
  useColorMode,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuGroup,
} from '@chakra-ui/react';

const {
  iconBackgroundLight,
  iconBackgroundDark,
  moonIconColor,
  sunIconColor,
  menuBackgroundDark,
  menuBackgroundLight,
  menuIconColorDark,
  menuIconColorLight,
  navHeight
} = exportedScss;

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container
      p='1rem'
      m='0 auto'
      height={navHeight}
    >
      <Flex
        minWidth='max-content'
        alignItems='center'
      >
        <Box className={styles.box}>
          <Link href='/'><a className={styles.logo}>Bryan Hain</a></Link>
        </Box>
        <Box className={styles.box}>
          <Box className={styles.menu} p='0 0.5rem'>
            <Menu>
              <MenuButton as={Box} className={styles.menuButton} bg={colorMode === 'light' ? menuBackgroundLight : menuBackgroundDark}>
                <FiMenu color={colorMode === 'light' ? menuIconColorDark : menuIconColorLight} className={styles.menuLogo} />
              </MenuButton>
              <MenuList>
                <MenuGroup title='Menu'>
                  <MenuItem>
                    <Link href='/about'><a>About</a></Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='/contact'><a>Contact</a></Link>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
          {/* <motion.div
            animate={colorMode === 'light' ? { y: [-100, 0] } : { y: [0, -100, 0] }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size='md'
              bg={colorMode === 'light' ? iconBackgroundDark : iconBackgroundLight}
              onClick={toggleColorMode}
              _hover={{ bg: colorMode === 'light' ? iconBackgroundDark : iconBackgroundLight }}
            >
              {colorMode === 'light' ? <MoonIcon color={moonIconColor} /> : <SunIcon color={sunIconColor} />}
            </Button>
          </motion.div> */}
        </Box>
      </Flex>
    </Container >
  );
};

export default Navbar;
