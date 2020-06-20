import Styled from 'styled-components';

const SidebarStyle = Styled.div ` 

    margin: 10px 0;
    font-family: inherit;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: inherit;

    h4 {
        color: black;
        
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        cursor: pointer;
        padding: 10px 0 5px 5px;
        border-bottom: 1px solid rgba(168, 131, 131, 0.479);
    }

    a {
        text-decoration: none;
    }

    h4:hover {
        color: #13aff0;
    }

    h3 {
        padding-bottom: 10px;
        border-bottom: 4px solid blueviolet;
        margin: 0;
    }

    hr {
        color: saddlebrown;
        border: 2px solid blueviolet;
    }

    @media (max-width: 480px) {
        h4 {
            font-size: 17px;
            padding-top: 10px;
        }
        
    } 

`;

export default SidebarStyle;