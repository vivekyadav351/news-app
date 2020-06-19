import Styled from 'styled-components';

const PostsStyle = Styled.div `

    a {
        text-decoration: none;
        color: black;
    }

    .Cards {
        font-family: inherit;
        display: inline-block;
        width: 47%;
        margin: 10px;
        cursor: pointer;
        border-radius: 2px;
        border: 2px solid rgba(212, 170, 170, 0.438);
    }

    .Cards h1 {
        /* display: block;
        display: -webkit-box;
        height: 43px;
        line-height: 1;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; */
        font-size: 18px;
        padding: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .Cards img {
        width: 100%;
        height: 200px;
        margin: 0;
        padding: 0;
    }

    .Cards:hover {
        box-shadow: 2px 2px 5px 1px #888888;
        opacity: 0.9;
    }

    @media (max-width: 499px) {
        .Cards {
            width: 100%;
            margin: 10px auto;
        }
        .Cards img {
            height: 180px;
        }
    }

`;

export default PostsStyle;