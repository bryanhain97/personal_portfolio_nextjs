import React, { useEffect } from 'react'
import { VscChromeClose } from 'react-icons/vsc'

function Navbar({ menuOpen, setMenuOpen }) {
    useEffect(() => {
        const menuElements = document.querySelectorAll('li.menu-element');
        menuElements.forEach(element => {
            element.addEventListener('click', () => {
                document.querySelector('div.menu-container').classList.remove('show');
                setMenuOpen(!menuOpen);
            })
        })
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
        <>
            <div className="menu-container">
                <ul className="menu">
                    <a href="#home"><li className="menu-element">home</li></a>
                    <a href="#about"><li className="menu-element">about</li></a>
                    <a href="#contact"><li className="menu-element">contact</li></a>
                </ul>
            </div>

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
                        {menuOpen ? <VscChromeClose className="menu-button-icon" /> : 'menu'}
                    </button>
                </nav>
            </div>
        </>
    )
}

export default Navbar
