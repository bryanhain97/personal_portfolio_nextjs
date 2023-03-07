import { Box, Container, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/partials/_ProfileCard.module.scss';

const ProfileCard = () => {
    const [smallerThan425] = useMediaQuery('(max-width: 425px)');
    const imageDim = smallerThan425 ? '160px' : '180px'

    return (
        <Container
            m='0'
            mt='5'
            p='0'
            display='flex'
            w={smallerThan425 ? 360 : 420}
            justifyContent='space-around'
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
                    borderRadius={2}
                    color='white'
                >
                    Frontend Developer
                </Text>
            </Box>
        </Container>
    )
}

export default ProfileCard
