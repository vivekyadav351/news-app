import React from 'react'
import './LocationNames.css'

const LocationNames = (props) => {
    return (
        <div className="cityBox">
            <img src={props.image} alt="Cities" />
            <h4>{props.city}</h4>
        </div>
    )
}

export default LocationNames
