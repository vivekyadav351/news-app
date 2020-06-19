import Styled from 'styled-components';

const StyledSideDrawer = Styled.div `
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: black;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    h2 {
        /* font-family: 'Sriracha', cursive; */
        /* font-family: 'Lobster', cursive; */
        margin: 15px;
        font-size: 20px;
        color: white;
    }

    @media (min-width: 500px) {
        display: none;
    }
    
`;

export default StyledSideDrawer;