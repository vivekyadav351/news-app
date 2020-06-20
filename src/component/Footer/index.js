import React from 'react'

import Styled from 'styled-components';

const FooterStyle = Styled.div ` 

    position: relative;
    font-family: inherit;
    font-size: 14px;
    width: 100%;
    height: 8vh;
    background-color: #000000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    clear: both;

`;

const Footer = () => {
    return (
        <FooterStyle>
            <p>© 2020 Co-Working Universe. All rights reserved</p>
        </FooterStyle>
    )
}

export default Footer
