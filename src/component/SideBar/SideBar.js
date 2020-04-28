import React, {Component} from 'react'
import axios from 'axios'
import Title from './Title/Title'
import './SideBar.css'

class SideBar extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data;
                this.setState({posts: posts});
            })
    }
    render() {
        const title = this.state.posts.slice(0, 5).map(post => {
            return <Title
                        key={post.id}
                        title={post.title} />
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
