import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavBar.css'
import NavItems from './NavItems/NavItems';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div className="drawer">
                <GiHamburgerMenu
                    color="white"
                    size="30px"
                    onClick={props.drawerToggleClick} />
            </div>
            <NavLink to="/" exact>Co-Working Universe</NavLink>
            <nav className="desktopOnly">
                <NavItems />
            </nav>
        </header>
    )
}

export default NavBar
