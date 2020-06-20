import Styled from 'styled-components';

const SocialIconStyle = Styled.div ` 

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    margin: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    .socialIcon {
        font-size: 30px;
        display: flex;
        justify-content: space-between;
    }

    .socialIcon a {
        margin: 0 10px;
    }

    @media (max-width: 499px) {

        flex-direction: column;
        
    }  

`;

export default SocialIconStyle;