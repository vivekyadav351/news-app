import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Navbar from '../container/NavBar/NavBar'
import Startup from '../component/Startup/Startup'
import Cowork from '../component/CoWork/CoWork'
import About from '../component/About/About'
//import Location from '../container/Location/Location'
//import Content from '../container/Content/Content'
import Home from '../container/Home/Home'
import Articles from '../component/Articles/Articles'
import './Layout.css'


class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Navbar />
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
