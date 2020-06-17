import React, { Component } from 'react'
//import {Route, Switch} from 'react-router-dom'

//import Posts from '../Posts/Posts'
import Sidebar from '../../component/SideBar'
//import Articles from '../../component/Articles/Articles'
import './Content.css'

export class Content extends Component {
    render() {
        return (
            <div className="Content" >
                <div className="cardContent">
                    {this.props.children}
                </div>
                <div className="sidebarContent">
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Content
