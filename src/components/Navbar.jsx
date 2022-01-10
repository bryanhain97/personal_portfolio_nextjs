import React from 'react'
import NavElement from './NavElement.jsx';

function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar">
                <li className="navbar-element"><a href="/"><NavElement title="home"></NavElement></a></li>
                <li className="navbar-element"><a href="/about"><NavElement title="about" /></a></li>
                <li className="navbar-element"><a href="/contact"><NavElement title="contact" /></a></li>
            </ul>
        </nav>
    )
}

export default Navbar
