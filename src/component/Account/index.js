import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import AccountStyle from './Account.styled';

const Account = (props) => {
    return (
        <AccountStyle onClick={props.clicked}>
            <NavLink to="/registration" className="userIcon"><FaUserAlt /></NavLink>
                {/* <div class="dropdown">
                    <p>Profile</p>
                    <p>Write a blog</p>
                    <p>Logout</p>
                </div> */}
        </AccountStyle>
    )
}

export default Account
