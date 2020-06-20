import React from 'react'

import StartupStyle from './Startup.styled';
import Content from '../../container/Content/index'
import Posts from '../../container/Posts/index';

const Startup = () => {
    return (
        <StartupStyle>
            <h1>Start-up News</h1>
            <Content>
                <Posts />
            </Content>
        </StartupStyle>
    )
}

export default Startup
