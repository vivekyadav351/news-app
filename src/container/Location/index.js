import React from 'react'
//import Bang from '../../assets/images/bang.jpeg'
import LocationNames from './LocationNames'
import './Location.css'

const cityData = [
    {name: 'Bengaluru', image: require('../../assets/images/bang.jpeg')},
    {name: 'Delhi/NCR', image: require('../../assets/images/del.jpg')},
    {name: 'Mumbai', image: require('../../assets/images/mum.jpg')},
    {name: 'Hyderabad', image: require('../../assets/images/hyd.jpg')},
    {name: 'Chennai', image: require('../../assets/images/chen.png')}
];

const Location = (props) => {

    const boxData = cityData.map((city, i) => (
        <LocationNames
                key={i}
                city={city.name}
                image={city.image}  />
    ));

    return (
        <div className="location">
            <h2>Our Locations</h2>
            <div className="city">
                {boxData}
            </div>
        </div>
    )
}

export default Location
