import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Section1 from './components/Sections/Section1.jsx';
import Section2 from './components/Sections/Section2.jsx';
import Section3 from './components/Sections/Section3.jsx';

function App() {
    const menuItems = document.querySelectorAll('ul.menu a')
    const menuContainer = document.querySelector('div.menu-container')
    const [menuOpen, setMenuOpen] = useState(null);
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
    return (
        <div className="app-container">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Section1 />
            <Section2 />
            <Section3 />
        </div >
    )
}

export default App

