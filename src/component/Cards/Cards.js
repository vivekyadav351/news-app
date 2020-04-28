import React, { Component } from 'react'
import './Cards.css'
import A2 from '../../assets/images/a2.png'

class Cards extends Component {
    render() {
        return (
            <div className="Cards" onClick={this.props.clicked}>
                <img src={A2} alt="A1" />
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Cards
