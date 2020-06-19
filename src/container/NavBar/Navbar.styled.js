import Styled from 'styled-components'

const NavbarStyle = Styled.header `

    height: 10vh;
    width: 100%;
    position: fixed;
    font-family: inherit;
    top: 0;
    left: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    nav {
        height: 100%;
    }

    a {
        font-family: 'Lobster', cursive;
        color: white;
        font-size: 20px;
        cursor: pointer;
        text-decoration: none;
    }

    .drawer {
        display: none;
    }

    .desktopOnly {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 499px) {
        .desktopOnly {
            display: none;
        }

        a {
            position: relative;
            font-size: 24px;
            right: 20px;
        }

        .drawer {
            display: block;
            cursor: pointer;
        }
    }

`;

export default NavbarStyle;