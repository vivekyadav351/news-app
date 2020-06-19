import React, { Component } from 'react'
import ContentStyle from './Content.styled';
import Sidebar from '../../component/SideBar'

export class Content extends Component {
    render() {
        return (
            <ContentStyle>
                <div className="cardContent">
                    {this.props.children}
                </div>
                <div className="sidebarContent">
                    <Sidebar />
                </div>
            </ContentStyle>
        )
    }
}

export default Content
