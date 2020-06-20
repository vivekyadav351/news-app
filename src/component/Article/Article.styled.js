import Styled from 'styled-components'

const ArticleStyle = Styled.div `

    display: flex;
    flex-direction: column;
    padding: 10px;
    font-family: inherit;
    text-align: justify;
    margin: 10px;

    h1 {
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(97, 54, 54, 0.5);
        margin: 0;
    }

    img {
        width: 100%;
        height: 350px;
        padding-top: 20px;
    }

    .AuthDate {
        font-size: 17px;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 10px 0 0 0;
    } 

    .AuthDate p {
        font-size: 15px;
        margin-left: 10px;
    }

    .AuthDate div {
        margin: 0 20px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 30px;
        margin: 5px 0;
    }


    @media (max-width: 480px) {
        img {
            height: 200px;
        }

        p {
            font-size: 19px;
            line-height: 26px;
            text-align: justify;
        }

        .AuthDate p {
            margin: 5px 10px;
            font-size: 15px;
        }

        h1 {
            padding-bottom: 20px;
            font-size: 26px;
            
        }

    }

`;

export default ArticleStyle;