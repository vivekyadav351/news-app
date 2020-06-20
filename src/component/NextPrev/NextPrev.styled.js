import Styled from 'styled-components';

const NextPrevStyle = Styled.div ` 

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    cursor: pointer;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
    }
    p {
        margin: 0 20px;
    }

`;

export default NextPrevStyle;