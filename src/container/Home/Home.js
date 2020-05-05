import React from 'react'
import './Home.css'
import Content from '../Content/Content'
import Location from '../Location/Location'


const Home = () => {
    return (
        <div className="home">
            <Location />
            <Content />
        </div>
    )
}

export default Home
