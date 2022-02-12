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

