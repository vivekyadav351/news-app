import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

import SideDrawerStyle from './styled.sideDrawer'
import Backdrop from './Backdrop'
import NavItems from '../NavItems';
import Search from '../../../component/Search/index';
import Account from '../../../component/Account/index';


const SideDrawer = (props) => {
    return (
        <div>
            <Backdrop
                show={props.open}
                clicked={props.close} />
            <SideDrawerStyle show={props.open}>
                <Link to="/" onClick={props.close} >
                    <AiFillHome color="white" size="30px" />
                    <h2>Home</h2>
                </Link>
                <Search/>
                <Account clicked={props.close} /> 
                <NavItems clicked={props.close} />
            </SideDrawerStyle>
        </div>
    )
}

export default SideDrawer
