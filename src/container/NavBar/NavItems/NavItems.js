import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavItems.css'
import Items from './Item/Items'

const NavItems = () => (
    <ul className="NavItems">
        <Items>
            <NavLink to="/startup" exact>Start-up News</NavLink>
            </Items>
        <Items>
            <NavLink to="/cowork">Co-working News</NavLink>
            </Items>
        <Items>
            <NavLink to="/about">About Us</NavLink>
        </Items>
    </ul>
);

export default NavItems
