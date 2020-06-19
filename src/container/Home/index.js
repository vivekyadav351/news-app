import React from 'react'

import Styled from 'styled-components';
import Content from '../Content'
import Location from '../Location'
import Posts from '../Posts/index';

const HomeStyle = Styled.div `

    display: flex;
    flex-direction: column;

    h2 {
    margin: 10px;
    padding: 0;
}

`;


const Home = (props) => {
    return (
        <HomeStyle onClick={props.clicked}>
            <Location />
            <Content>
                <h2>Funding News</h2>
                <Posts />
            </Content>
        </HomeStyle>
    )
}

export default Home;
