import React from 'react'
import {NavLink} from 'react-router-dom';


import './NavBar.css'
import NavItems from './NavItems';
import { GiHamburgerMenu } from "react-icons/gi";
import Search from '../../component/Search/index';
import Account from '../../component/Account/index';

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div className="drawer">
                <GiHamburgerMenu
                    color="white"
                    size="30px"
                    onClick={props.drawerToggleClick} />
            </div>
            <h4><NavLink to="/" exact>Co-Working Universe</NavLink></h4>
            <nav className="desktopOnly">
                <NavItems />
            </nav>
            <nav className="desktopOnly">
                <Search /> 
                <Account />
            </nav>
            
        </header>
    )
}

export default NavBar
