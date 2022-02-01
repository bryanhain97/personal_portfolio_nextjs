import React from 'react'
import { GrMenu } from 'react-icons/gr'

function Navbar() {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-list">
                    <a href="#home"><li className="navbar-element">Home</li></a>
                    <a href="#about"><li className="navbar-element">About</li></a>
                    <a href="#contact"><li className="navbar-element">Contact</li></a>
                </ul>
            </nav>
            <nav className="navbar-small">
                <a href="#">
                    <GrMenu className="navbar-small-icon" />
                </a>
            </nav>
        </div>
    )
}

export default Navbar
