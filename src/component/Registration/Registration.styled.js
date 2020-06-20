import Styled from 'styled-components';

const RegistrationStyle = Styled.div ` 

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    form input {
        font-family: inherit;
        font-size: 14px;
        width: 300px;
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
        border: 2px solid rgb(211, 185, 185);
        outline: none;
    }

    form input:focus {
        outline: none;
    }

    form .buttons {
        display: flex;
        justify-content: space-between;
    }

    form .buttons button {
        width: 100px;
        padding: 10px 20px;
        font-size: 16px;
        margin: 10px;
        cursor: pointer;
    }

`;

export default RegistrationStyle;