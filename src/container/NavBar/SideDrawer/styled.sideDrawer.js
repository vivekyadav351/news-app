import styled from 'styled-components';

const StyledSideDrawer = styled.div `
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: black;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};

    h2 {
        padding: 0 2px 10px 2px;
        border-bottom: 4px solid white;
        font-size: 21px;
        color: white;
    }

    @media (min-width: 500px) {
        display: none;
    }
    
`;

export default StyledSideDrawer;