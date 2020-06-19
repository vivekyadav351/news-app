import Styled from 'styled-components'

const ContentStyle = Styled.div `

    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;

    a {
        text-decoration: none;
        color: black;
    }

    .cardContent {
        width: 80%;
    }

    .sidebarContent {
        width: 20%;
        border-left: 1px solid rgb(179, 130, 130);
    }

    @media (max-width: 499px) {

        flex-direction: column;

        .cardContent {
            width: 100%;
        }
        
        .sidebarContent {
            width: 100%;
            border-left: none;
        }
    }

`;

export default ContentStyle;