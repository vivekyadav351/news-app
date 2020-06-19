import Styled from 'styled-components';

const LocationStyle = Styled.div `

    margin: 10px 20px 0 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(212, 100, 100, 0.575);
    box-sizing: border-box;

    h2 {
        margin: 10px;
    }

    .city {
        width: 100%;
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }

    .cityBox {
        width: 200px;
        height: auto;
        border: 1px solid rgba(160, 122, 122, 0.322);
        color: black;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        justify-content: initial;
        align-items: center;
    }

    .cityBox:hover {
        box-shadow: 2px 2px 5px 1px grey;
    }

    .cityBox img {
        width: 100px;
        height: 80px;
    }

    .cityBox h4 {
        margin: 0 10px;
    }


    @media (max-width: 499px) {

        .cityBox {
            width: 80%;
            margin: 10px 0;
        }

        .city {
            flex-direction: column;
            justify-content: space-between;
        }
        
        .cityBox h4 {
            margin: 0 10px;
            padding: 0 10px;
            font-size: 19px;
        }
    }

`;


export default LocationStyle;