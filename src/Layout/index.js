import React, { Component } from 'react'

import Navbar from '../container/NavBar'
import SideDrawer from '../container/NavBar/SideDrawer';
import Footer from '../component/Footer'
import './Layout.css'


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
            <div className="Layout">
                <Navbar drawerToggleClick={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerHandler} />
                <main className="main">
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default Layout
