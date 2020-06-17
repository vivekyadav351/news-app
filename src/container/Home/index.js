import React from 'react'
import './Home.css'
import Content from '../Content'
import Location from '../Location'
import Posts from '../Posts'


const Home = () => {
    return (
        <div className="home">
            <Location />
            <Content>
                <Posts />
            </Content>
        </div>
    )
}

export default Home;
