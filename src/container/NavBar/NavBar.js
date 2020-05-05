import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavBar.css'
import NavItems from './NavItems/NavItems'

const NavBar = () => {
    return (
        <header className="Navbar">
            <NavLink to="/" exact>Co-Working Universe</NavLink>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default NavBar
