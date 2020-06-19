import React from 'react';

import SearchStyle from './RelatedPost.styled';


const RelatedArticles = (props) => {
    return (
        <SearchStyle>
            <img src={props.image} alt="A1" />
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </SearchStyle>
    )
}

export default RelatedArticles;
