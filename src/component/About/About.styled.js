import Styled from 'styled-components';

const AboutStyle = Styled.div `

    margin: 10px 40px 40px;
    font-family: 'Oswald', sans-serif;

    .section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border: 2px solid rgb(231, 113, 113);
        border-radius: 5px;
        box-shadow: 3px 2px 10px rgb(139, 44, 44);
    }

    .section img {
        width: 25%;
        height: auto;
        border: 3px solid rgb(216, 196, 196);
        border-radius: 5px;
        margin-left: 20px;
    }

    h1 {
        font-size: 35px;
    }

    p {
        font-size: 22px;
        line-height: 40px;
        text-align: justify;
    }

    @media (max-width: 499px) {

        margin: 10px 10px 40px;
        
        .section {
            flex-direction: column;
        }

        .section img {
            width: 100%;
            margin: 10px;
        }
        
    }

`;

export default AboutStyle