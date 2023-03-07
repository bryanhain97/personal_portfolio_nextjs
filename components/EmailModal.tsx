import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import { MdMail } from 'react-icons/md'
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/partials/_EmailModal.module.scss';

const NEXT_PUBLIC_EMAILJS_APIKEY = process.env.NEXT_PUBLIC_EMAILJS_APIKEY as string
const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string

type EmailParams = {
    from_name: string,
    message: string,
}

const EmailModal = () => {
    const [email, setEmail] = useState<EmailParams>({
        from_name: '',
        message: ''
    })
    const [smallerThan425] = useMediaQuery('(max-width: 425px)');
    const textareaPlaceholder = `Hey Bryan, i really like your website.`;
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setEmail({ ...email, [e.target.name]: e.target.value }) };
    const fontSize = smallerThan425 ? '3xl' : '4xl'

    return (
        <Container p='15px' m='0' width={smallerThan425 ? '360px' : '420px'} className={styles.emailModal}>
            <Text color='blue.700' fontSize={fontSize}>Message me</Text>
            <form onSubmit={(e) => sendEmail(e, email)}>
                <FormControl>
                    <FormLabel htmlFor='from'>From</FormLabel>
                    <Input type='text' placeholder='Ash Ketchum' id='from' name='from_name' onChange={handleInputChange} value={email.from_name} isRequired />
                </FormControl>
                <FormControl mt='3'>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea placeholder={textareaPlaceholder} fontSize='sm' id='message' name='message' onChange={handleInputChange} value={email.message} isRequired />
                </FormControl>
                <Button type='submit' mt='1rem' rightIcon={<MdMail />} bgColor='blue.700' color='white'>Send</Button>
            </form>
            <p className={styles.modalInfo}>with <a href='https://www.emailjs.com/' target='_blank' rel='noreferrer'>EmailJS</a></p>
        </Container >
    )

    /**
     * FUNCTIONS
    */
    async function sendEmail(e: FormEvent<HTMLFormElement>, { from_name, message }: EmailParams) {
        e.preventDefault();
        const { status } = await emailjs.send(NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, { from_name, message }, NEXT_PUBLIC_EMAILJS_APIKEY);
        if (status === 200) {
            toast.success('Email has been send.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        } else {
            toast.warn('Something went wrong!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        }
    }
}

export default EmailModal;
