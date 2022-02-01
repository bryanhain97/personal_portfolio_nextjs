import React, { useState, useEffect } from 'react'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    useEffect(() => {
        const menuButton = document.querySelector('button.menu-button');
        menuButton.textContent === 'menu' ? setMenuOpen(true) : setMenuOpen(false);
        console.log('state of menuOpen: ', menuOpen)
    })
    const clickMenuButton = (e) => {
        const menuContainer = document.querySelector('div.menu-container');
        if (e.target.textContent === 'menu') {
            menuContainer.classList.add('hide')
            e.target.textContent = 'close'
            setMenuOpen(false)
        } else {
            e.target.textContent = 'menu';
            menuContainer.classList.remove('hide');
            setMenuOpen(true);
        }
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
                    menu
                </button>
            </nav>
        </div>
    )
}

export default Navbar
