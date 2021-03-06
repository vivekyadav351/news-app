import Styled from 'styled-components';

const AccountStyle = Styled.div `

    position: relative;
    display: inline-block;
    margin: 0 10px;

    a {
        color: white;
        font-size: 20px;
        cursor: pointer;
        text-decoration: none;
    }

    /* .dropdown {
        display: none;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(85, 41, 41, 0.2);
        background-color: tomato;
        transition: width 0.5s ease;
        width: 0px;
        z-index: 1;
    }

    &:hover .dropdown {
        display: block;
        
    }

    .dropdown p {
        padding: 10px;
        cursor: pointer;
        margin: 0;
    }

    .dropdown p:hover {
        background-color: rgb(58, 24, 24);
        color: white;
    } */

    @media (max-width: 500px) {

        a {
            font-size: 30px;
            margin: 10px 0;
        }
    }

`;


export default AccountStyle;