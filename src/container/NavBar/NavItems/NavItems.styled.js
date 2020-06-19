import Styled from 'styled-components'

const NavItemStyle = Styled.ul `

    font-family: inherit;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    .line {
        width: 0px;
        color: white;
        margin: 0 25px;
    }

    a {
        font-family: 'Open Sans', sans-serif;
        color: white;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
    }

    @media (max-width: 500px) {

        flex-flow: column;

        .line {
            display: none;
        }

        a {
            margin: 0;
            font-size: 20px;
        }

        a:hover {
            background-color: rgb(153, 81, 81);
            box-shadow: 2px 2px 5px 5px #888888;
        }
    }

`;

export default NavItemStyle;