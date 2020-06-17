import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import './Account.css';

const Account = () => {
    return (
        <div className="account">
            <NavLink to="/#" className="userIcon"><FaUserAlt /></NavLink>
                {/* <div class="dropdown">
                    <p>Profile</p>
                    <p>Write a blog</p>
                    <p>Logout</p>
                </div> */}
        </div>
    )
}

export default Account
