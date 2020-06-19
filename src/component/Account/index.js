import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import './Account.css';

const Account = (props) => {
    return (
        <div className="account" onClick={props.clicked}>
            <NavLink to="/registration" className="userIcon"><FaUserAlt /></NavLink>
                {/* <div class="dropdown">
                    <p>Profile</p>
                    <p>Write a blog</p>
                    <p>Logout</p>
                </div> */}
        </div>
    )
}

export default Account
