import React from 'react'
import {NavLink} from 'react-router-dom';


import NavBarStyle from './Navbar.styled';
import NavItems from './NavItems';
import { GiHamburgerMenu } from "react-icons/gi";
import Search from '../../component/Search/index';
import Account from '../../component/Account/index';

const NavBar = (props) => {
    return (
        <NavBarStyle>
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
            <nav className="desktopOnly">
                <Search /> 
                <Account />
            </nav>
        </NavBarStyle>
    )
}

export default NavBar
