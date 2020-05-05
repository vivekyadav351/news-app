import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Title from './Title/Title'
import './SideBar.css'

class SideBar extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data;
                this.setState({posts: posts});
            })
    }
    render() {
        const title = this.state.posts.slice(0, 5).map(post => {
            return (
                <Link to={"/" + post.id} key={post.id}>
                    <Title
                        title={post.title}
                        clicked={() => this.postClickHandler(post.id)} />
                </Link>
                )
                        
        });
         return (
            <div className="Sidebar">
            <h3>Recent News</h3>
                {title}
            </div>
         )
    }
}

export default SideBar
