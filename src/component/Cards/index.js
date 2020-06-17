import React, { Component } from 'react'
//import {withRouter} from 'react-router-dom'
import './Cards.css'

class Cards extends Component {
    render() {
        
        return (
            <div className="Cards" onClick={this.props.clicked}>
                <img src={this.props.image} alt="A1" />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


export default Cards;
