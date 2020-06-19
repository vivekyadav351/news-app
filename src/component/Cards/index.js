import React from 'react';
import './Cards.css';

const Cards = (props) => {
    return (
        <div className="Cards">
            <img src={props.image} alt="A1" />
            <h1>{props.title}</h1>
        </div>
    )
}

export default Cards
