import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavBar.css'
import NavItems from './NavItems/NavItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <DrawerToggle clicked={props.drawerToggleClick} />
            <NavLink to="/" exact>Co-Working Universe</NavLink>
            <nav className="desktopOnly">
                <NavItems />
            </nav>
        </header>
    )
}

export default NavBar
