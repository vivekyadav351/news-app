import React from 'react'
import StyledSideDrawer from './styled.sideDrawer'
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
            <StyledSideDrawer show={props.open}>
                <h2>Co-Working Universe</h2>
                <nav>
                    <NavItems clicked={props.close} />
                </nav>
                <nav>
                    <Search/>
                    <Account clicked={props.close} />
                </nav>
            </StyledSideDrawer>
        </div>
    )
}

export default SideDrawer
