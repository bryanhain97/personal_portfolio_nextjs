import React, { useState, useEffect } from 'react'
import {VscChromeClose} from 'react-icons/vsc'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    useEffect(() => {
        setMenuOpen(false);
    }, [])
    useEffect(() => {
        const menuContainer = document.querySelector('div.menu-container');
        const menuButton = document.querySelector('button.menu-button');
        menuContainer.classList.toggle('show');
        menuButton.classList.toggle('red');
    }, [menuOpen])
    const clickMenuButton = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-list">
                    <a href="#home"><li className="navbar-element">home</li></a>
                    <a href="#about"><li className="navbar-element">about</li></a>
                    <a href="#contact"><li className="navbar-element">contact</li></a>
                </ul>
            </nav>
            <nav className="navbar-small">
                <button className="menu-button" onClick={clickMenuButton}>
                    {menuOpen ? <VscChromeClose className="menu-button-icon" />: 'menu'}
                </button>
            </nav>
        </div>
    )
}

export default Navbar
