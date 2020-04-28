import React from 'react'
import './NavBar.css'
import NavItems from './NavItems/NavItems'

const NavBar = () => {
    return (
        <header className="Navbar">
            <h3>Co-Working Universe</h3>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default NavBar
