import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';


function Section3() {
    const form = useRef()
    useEffect(() => {
        const section3title = document.querySelector('.section3-title')
        const socials = document.querySelectorAll('.social')
        const options = {
            rootMargin: '-50px 0px 0px 0px'
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return
                }
                else {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target)
                }
            })
        }, options);
        observer.observe(section3title)
        socials.forEach(social => {
            observer.observe(social)
        })
    }, [])
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
            <h3 className="section3-title">Send me a message!</h3>
            <div className="wrapper">
                <div className="email-container">
                    <form className="form" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="from_name" required />
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message" required />
                        <input className="input-submit" type="submit" value="Send" />
                    </form>
                </div>
                <div className="socials">
                    <div className="social-container">
                        <a href="https://github.com/bryanhain97" target="_blank" className="social"><TiSocialGithub className="social-icon social-icon-github" />GitHub</a>
                        <a href="https://twitter.com/Bryan47588123" target="_blank" className="social"><TiSocialTwitter className="social-icon social-icon-twitter" />Twitter</a>
                        <a href="https://www.linkedin.com/in/bryan-hain-572568206/" target="_blank" className="social"><TiSocialLinkedin className="social-icon social-icon-linkedin" />LinkedIn</a>
                        <a href="https://www.instagram.com/bry4n_h/" target="_blank" className="social"><TiSocialInstagram className="social-icon social-icon-instagram" />Instagram</a>
                    </div>
                    <div className="img-container">
                        <img loading="lazy" src="./pictures/self.png" alt="selfie" />
                    </div>
                </div>
                <div className="coffee-container">
                    <div className="coffee">
                        <h3>Or buy me a <span>coffee!</span></h3>
                        <div className="payment-container"> --- put coffee payment container in here --- </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section3
