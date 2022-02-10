import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';


function Section3() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_90ikj9l', 'template_xv6bpb7', form.current, 'user_p3bpXLoExjrQXv3GH5P7m')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section id="contact" className="section section3" >
            <h3>Send me a message!</h3>
            <div className="wrapper">
                <div className="email-container">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="from_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className="socials">
                    <a href="" className="social"><TiSocialGithub className="social-icon" />GitHub</a>
                    <a href="" className="social"><TiSocialInstagram className="social-icon" />Instagram</a>
                    <a href="" className="social"><TiSocialTwitter className="social-icon" />Twitter</a>
                    <a href="" className="social"><TiSocialLinkedin className="social-icon" />LinkedIn</a>
                </div>
            </div>
        </section >
    )
}

export default Section3
