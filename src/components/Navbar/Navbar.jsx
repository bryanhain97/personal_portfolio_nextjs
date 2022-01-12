import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-list-element">
                    <Link className="nav-list-link" to="/">Home</Link>
                </li>
                <li className="navbar-list-element">
                    <Link className="nav-list-link" to="/about">About</Link>
                </li>
                <li className="navbar-list-element">
                    <Link className="nav-list-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
