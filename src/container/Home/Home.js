import React from 'react'
import './Home.css'
import Content from '../Content/Content'
import Location from '../Location/Location'
import Posts from '../Posts/Posts'


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

export default Home
