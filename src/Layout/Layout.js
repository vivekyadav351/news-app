import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Navbar from '../container/NavBar/NavBar'
import Startup from '../component/Startup/Startup'
import Cowork from '../component/CoWork/CoWork'
import About from '../component/About/About'
import Home from '../container/Home/Home'
import Articles from '../component/Articles/Articles'
import SideDrawer from '../container/NavBar/SideDrawer/SideDrawer';
import './Layout.css'


class Layout extends Component {
    state = {
        showSideDrawer: true
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
                <Switch>
                    <Route path="/startup" exact component={Startup} />
                    <Route path="/cowork" exact component={Cowork} />
                    <Route path="/about" exact component={About} />
                    <Route path="/:id" exact component={Articles} />
                    <Route path="/" exact component={Home} />
                   <Home />
                </Switch>
            </div>
        )
    }
}

export default Layout
