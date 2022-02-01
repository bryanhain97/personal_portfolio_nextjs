import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';

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
    return (
        <div className="app-container">
            <Navbar />
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
            </section>
            <section id="contact" className="section section3">
            </section>
        </div>
    )
}

export default App