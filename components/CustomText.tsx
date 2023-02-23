import { Text, TextProps } from '@chakra-ui/react';
import type { FC } from 'react'
import styles from '../styles/partials/_CustomTextComponent.module.scss'
import { motion } from 'framer-motion'
interface ICustomTextComponent extends TextProps { }


const CustomTextComoponent: FC<ICustomTextComponent> = ({ children, ...args }) => {
    return (
        <Text {...args} className={styles.customTextComponent}>
            {children}
        </Text>
    )
}

export default CustomTextComoponent;
