import React from 'react'
import './NavItems.css'
import Items from './Item/Items'

const NavItems = () => (
    <ul className="NavItems">
        <Items>Start-up News</Items>
        <Items>Co-working News</Items>
        <Items>About Us</Items>
    </ul>
);

export default NavItems
