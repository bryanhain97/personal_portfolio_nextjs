import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';



// function setup() {
//     const options = {
//         rootMargin: '0px 0px -200px 0px'
//     }
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.classList.add('show');
//                 observer.unobserve(entry.target);
//             } else {
//                 return;
//             }
//         })
//     }, options)
// }
// window.addEventListener('DOMContentLoaded', setup);

function App() {
    function toggleHidden() {
        const text1Container = document.querySelector('#h1-text-container-1')
        const text2Container = document.querySelector('#h1-text-container-2')
        setInterval(() => {
            text1Container.classList.toggle('hidden')
            text2Container.classList.toggle('hidden')
        }, 4000)
    }
    useEffect(toggleHidden, [])
    const [menuOpen, setMenuOpen] = useState(null);
    useEffect(() => {
        console.log(menuOpen)
    }, [menuOpen]);
    return (
        <div className="app-container">
            <div className="menu-container">
                <ul className="menu">
                    <a href="#home"><li className="menu-element">home</li></a>
                    <a href="#about"><li className="menu-element">about</li></a>
                    <a href="#contact"><li className="menu-element">contact</li></a>
                </ul>
            </div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <section id="home" className="section section1">
                <div id="h1-text-container-1" className="h1-text-container">
                    <h1 className="h1-text1">Hello. My name is Bryan.</h1>
                    <h1 className="h1-text2">I'm a self taught developer.</h1>
                </div>
                <div id="h1-text-container-2" className="h1-text-container hidden">
                    <h1 className="h1-text1">I'm 24 years old.</h1>
                    <h1 className="h1-text2">from Berlin, Germany.</h1>
                </div>
            </section>
            <section id="about" className="section section2">
                <div className="section2-head">
                    <div className="section2-head-text head-proficiencies">
                        <h2 className="section2-head-text-1">proficiencies</h2>
                        <div className="paragraph-container">
                            <p>I specialize on web-development.</p>
                            <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
                            <p>I focus on the front-end, but can also build full-stack applications.</p>
                            <p>Technologies i commonly use include:</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                </ul>
                        </div>
                    </div>
                    <div className="section2-head-text head-like">
                        <h2 className="section2-head-text-1">what i like</h2>
                        <div className="paragraph-container">
                            <p>I specialize on web-development.</p>
                            <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
                            <p>I focus on the front-end, but can also build full-stack applications.</p>
                            <p>Technologies i commonly use include:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="section2-head-text head-facts">
                        <h2 className="section2-head-text-1">10 facts</h2>
                        <div className="paragraph-container">
                            <p>I specialize on web-development.</p>
                            <p>I help people find a fitting design for their needs and build eye-catching experiences.</p>
                            <p>I focus on the front-end, but can also build full-stack applications.</p>
                            <p>Technologies i commonly use include:
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section2-head-main"></div>
            </section>
            <section id="contact" className="section section3">
            </section>
        </div>
    )
}

export default App