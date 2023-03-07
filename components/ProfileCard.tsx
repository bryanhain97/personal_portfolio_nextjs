import { Box, Container, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/partials/_ProfileCard.module.scss';

const ProfileCard = () => {
    const [smallerThan425] = useMediaQuery('(max-width: 425px)');
    const imageDim = smallerThan425 ? '160px' : '200px'

    return (
        <Container
            m='0'
            p='0'
            display='flex'
            w={smallerThan425 ? 360 : 440}
            justifyContent='space-evenly'
            alignItems='center'
        >
            <Image
                className={styles.image}
                src='/images/me.jpeg'
                alt='picture of me'
                width={imageDim}
                height={imageDim}
            />
            <Box>
                <Text
                    fontSize={smallerThan425 ? 'md' : 'xl'}
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
