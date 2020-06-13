import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavItems.css'
import Items from './Item/Items';
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Search from '../../../component/Search/Search'

const NavItems = (props) => (
    <ul className="NavItems" onClick={props.clicked}>
        <Items>
            <NavLink to="/startup" exact>Start-up News</NavLink>
        </Items>
        <Items>
            <NavLink to="/cowork">Co-working News</NavLink>
            </Items>
        <Items>
            <NavLink to="/about">About Us</NavLink>
        </Items>
        <Items>
            <Search />
        </Items>
        <Items>
            <div className="user">
                <NavLink to="/profile" className="userIcon"><FaUserCircle /></NavLink>
                <div class="dropdown">
                    <p>Profile</p>
                    <p>Write a blog</p>
                    <p>Logout</p>
                </div>
            </div>
        </Items>
    </ul>
);

export default NavItems
