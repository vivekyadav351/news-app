import Styled from 'styled-components';

const UserCommentStyle = Styled.div ` 

    background-color: rgb(214, 214, 194);
    height: auto;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid rgb(206, 182, 182);
    border-radius: 5px;
    font-family: inherit;

    h3 {
        margin: 5px 0;
        font-size: 24px;
    }

    p {
        font-size: 16px;
        margin: 5px 0;
    }

`;

export default UserCommentStyle;