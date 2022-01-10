import React from 'react'
import { ImFolder } from 'react-icons/im';

const NavElement = (props) => {
    return (
        <div className="navbar-element">
            <ImFolder className="nav-react-icon" />
            <h2 className="nav-element-text">{props.title}</h2>
        </div>
    )
}

export default NavElement
