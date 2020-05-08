import React from 'react'
import StyledSideDrawer from './styled.sideDrawer'
import Backdrop from './Backdrop/Backdrop'

import NavItems from '../NavItems/NavItems'

const SideDrawer = (props) => {
    return (
        <div>
            <Backdrop
                show={props.open}
                clicked={props.close} />
            <StyledSideDrawer show={props.open}>
                <h2>Co-Working Universe</h2>
                <nav>
                    <NavItems />
                </nav>
            </StyledSideDrawer>
        </div>
    )
}

export default SideDrawer
