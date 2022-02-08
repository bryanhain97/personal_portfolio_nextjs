import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Section1 from './components/Sections/Section1.jsx';
import Section2 from './components/Sections/Section2.jsx';

function App() {
    const menuItems = document.querySelectorAll('ul.menu a')
    const menuContainer = document.querySelector('div.menu-container')
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            setMenuOpen(false);
            menuContainer.classList.remove('show');
        })
    })
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
            <Section1 />
            <Section2 />
            <section id="contact" className="section section3">
            </section>
        </div >
    )
}

export default App