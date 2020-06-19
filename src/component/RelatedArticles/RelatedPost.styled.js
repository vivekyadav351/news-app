import Styled from 'styled-components';

const SearchStyle = Styled.div `

    display: inline-block;
    width: 47%;
    font-family: inherit;
    margin: 10px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid rgba(212, 170, 170, 0.438);

    h1 {
        font-size: 20px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p {
        display: block;
        display: -webkit-box;
        text-align: justify;
        max-width: 100%;
        height: 51px;
        padding: 0 10px 10px 10px;
        font-size: 15px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    img {
        width: 100%;
        height: 150px;
        margin: 0;
        padding: 0px;
    }

    &:hover {
        box-shadow: 2px 2px 5px 1px #888888;
    }

    @media (max-width: 499px) {

        display: inline-block;
        width: 100%;
        font-family: inherit;
        margin: 10px;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 5px;
        border: 2px solid rgba(212, 170, 170, 0.438);

    }

`;


export default SearchStyle;