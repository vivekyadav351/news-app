import React from 'react'
import './Startup.css';
import Content from '../../container/Content/index'
import Posts from '../../container/Posts/index';

const Startup = () => {
    return (
        <div className="startup">
            <h1>Start-up News</h1>
            <Content>
                <Posts />
            </Content>
        </div>
    )
}

export default Startup
