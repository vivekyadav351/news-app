import React from 'react';
//import Cards from '../Cards';

const RelatedArticles = (props) => {
    return (
        <div className="related">
            <img src={props.image} alt="A1" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default RelatedArticles
