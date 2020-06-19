import React, { Component } from 'react';

import Navbar from '../container/NavBar';
import SideDrawer from '../container/NavBar/SideDrawer';
import Footer from '../component/Footer';
import {LayoutStyle, MainStyle} from './Layout.styled';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState({showSideDrawer:  false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer }
        })
    }

    render() {
        return (
            <LayoutStyle>
                <Navbar drawerToggleClick={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerHandler} />
                <MainStyle>
                    {this.props.children}
                </MainStyle>
                <Footer />
            </LayoutStyle>
        )
    }
}

export default Layout
