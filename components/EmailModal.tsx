import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text,
} from '@chakra-ui/react';
import { MdMail } from 'react-icons/md'
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
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
    const textareaPlaceholder = `Hey Bryan, i really like your website.`;
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setEmail({ ...email, [e.target.name]: e.target.value }) };


    return (
        <Container p='15px' m='0' maxW='450px' border='1px solid black' my='1rem'>
            <Text color='blue.700' fontSize='4xl'>Message me</Text>
            <form onSubmit={(e) => sendEmail(e, email)}>
                <FormControl>
                    <FormLabel htmlFor='from'>From</FormLabel>
                    <Input type='text' id='from' name='from_name' onChange={handleInputChange} value={email.from_name} isRequired />
                </FormControl>
                <FormControl mt='3'>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                    <Textarea placeholder={textareaPlaceholder} fontSize='sm' id='message' name='message' onChange={handleInputChange} value={email.message} isRequired />
                </FormControl>
                <Button type='submit' mt='1rem' rightIcon={<MdMail />} bgColor='blue.700' color='white'>Send</Button>
            </form>
            <ToastContainer />
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
