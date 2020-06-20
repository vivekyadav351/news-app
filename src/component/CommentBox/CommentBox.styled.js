import Styled from 'styled-components';

const CommentBoxStyle = Styled.div ` 

    margin-bottom: 20px;

    form {
        display: flex;
        flex-direction: column;
        padding: 0px 20px;
        margin: 0 40px;
        width: 800px;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form input,
    form textarea {
        box-sizing: border-box;
        width: 300px;
        height: 40px;
        margin: 10px;
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid rgb(211, 185, 185);
        font-family: inherit;
        font-size: 15px;
        font-weight: bold;
    }

    form input:focus,
    form textarea:focus {
        outline: none;
        background-color: rgb(240, 227, 227);
        /* box-shadow: 1px 1px 1px 1px brown; */
    }

    form textarea {
        width: 620px;
        height: 150px;
    }

    form button {
        width: 200px;
        height: 40px;
        margin: 10px;
        border: none;
        border-radius: 3px;
        color: white;
        background-color: rgb(82, 80, 175);
        cursor: pointer;
        outline: none;
    }

    form button:hover {
        background-color: rgb(161, 96, 161);
    }

    @media (max-width: 499px) {

        margin-bottom: 0px;

        form {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            width: 100%;
            box-sizing: border-box;
            border-radius: 5px;
        }

        form input,
        form textarea {
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            margin: 10px;
            padding: 10px 20px;
            border-radius: 5px;
            border: 1px solid rgb(211, 185, 185);
            font-family: inherit;
            font-size: 15px;
            font-weight: bold;
        }

        form textarea {
            height: 150px;
        }
    }   

`;

export default CommentBoxStyle;