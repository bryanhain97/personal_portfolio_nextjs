import { Box, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/partials/_ProfileCard.module.scss';

const ProfileCard = () => {

    return (
        <Container m='0' p='0' display='flex' w='450px' justifyContent='space-between' alignItems='center'>
            <Image
                className={styles.image}
                src='/images/me.jpeg'
                alt='picture of me'
                width='200'
                height='200'
            />
            <Box>
                <Text
                    fontSize='xl'
                    px='1rem'
                    backgroundColor='blue.700'
                    color='white'
                >
                    Frontend Developer
                </Text>
            </Box>
        </Container>
    )
}

export default ProfileCard
