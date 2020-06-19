import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import LocationStyle from './Location.styled';
import cityName from '../../data/blog.json';


const cityData = [
    {name: 'Bengaluru', image: require('../../assets/images/bang.jpeg')},
    {name: 'Delhi/NCR', image: require('../../assets/images/del.jpg')},
    {name: 'Mumbai', image: require('../../assets/images/mum.jpg')},
    {name: 'Hyderabad', image: require('../../assets/images/hyd.jpg')},
    {name: 'Chennai', image: require('../../assets/images/chen.png')}
];

const Location = (props) => {

    // const [city, setCity] = useState([]);

    // useEffect(() => {
    //     const city = cityName.locationData;
    //     setCity(city);
    //     console.log(city);
        
    // }, [city]);

    // const location = city.map(post => {
    //     return (
    //         <Link to={`/location/${post.id}`} key={post.id}>
    //             <div className="cityBox">
    //                 <img src={require(`../../assets/images/${post.blogImage}`)} alt="Cities" />
    //                 <h4>{post.name}</h4>
    //             </div>
    //         </Link>
    //     )
    // })

    const boxData = cityData.map((city, i) => (
        <div className="cityBox" key={i}>
            <img src={city.image} alt="Cities" />
            <h4>{city.name}</h4>
        </div>
    ));

    return (
        <LocationStyle>
            <h2>Our Locations</h2>
            <div className="city">
                {boxData}
            </div>
        </LocationStyle>
    )
}

export default Location
