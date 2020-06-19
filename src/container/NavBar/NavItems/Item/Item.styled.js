import Styled from 'styled-components'

const ItemStyle = Styled.li `

    .Items {
        width: auto;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        color: white;
    }

    .Items {
        margin: 0 15px;
    }
    
    @media (max-width: 500px) {
        
        width: 100%;
        margin: 10px 0;
        border-radius: 0;
        box-shadow: none;
        font-size: 18px;
        padding: 10px 10px;
        border-radius: 5px;
        border: 1px solid transparent;
        box-shadow: 2px 2px 5px 2px white;
        
    } 

`;


export default ItemStyle;