import Styled from 'styled-components';

const SearchStyle = Styled.div `

    margin: 0 20px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    form {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .searchInput {
        border: 0;
        width: ${props => props.search ? '200px' : '0'};;
        background-color: ${props => props.search ? 'rgb(68, 62, 53)' : 'black'};
        color: ${props => props.search ? 'white' : 'black'};
        padding: 10px;
        font-size: 16px;
        margin-right: 15px;
        align-items: center;
        transition: width 0.5s ease;
    }

    .searchInput:focus {
        outline: 0;
    }

    @media (max-width: 500px) {

        margin: 10px 0;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;

        .searchInput {
            width: 200px;
            background-color: rgb(68, 62, 53);
            color: white;
        }

        .searchIcon {
            display: none;
        }

    }

`;

export default SearchStyle;