import React from 'react'
import {NavLink} from 'react-router-dom'

import NavItemsStyle from './NavItems.styled';
import Items from './Item/Items';

const NavItems = (props) => (
    <NavItemsStyle onClick={props.clicked}>
        <Items>
            <NavLink to="/startup-news" exact>Start-up News</NavLink>
        </Items>
        <div className="line">|</div>
        <Items>
            <NavLink to="/about-us">About Us</NavLink>
        </Items>
        <div className="line">|</div>
        <Items>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </Items>
    </NavItemsStyle>
);

export default NavItems
