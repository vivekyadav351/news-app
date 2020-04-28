import React, { Component } from 'react'
import axios from 'axios'

import Cards from '../../component/Cards/Cards'
import Sidebar from '../../component/SideBar/SideBar'
//import Location from '../Location/Location'
import Articles from '../../component/Articles/Articles'
import './Content.css'
// import A1 from '../../assets/images/a1.png'

export class Content extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({posts: updatedPosts});
            })
    }

    postClickHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const cardContent = this.state.posts.map(post => {
            return <Cards
                        key={post.id}
                        title={post.title}
                        desc={post.body}
                        clicked={() => this.postClickHandler(post.id)} />
        });
        
        return (
            <div className="Content">
                <div className="cardContent">
                    <Articles id={this.state.selectedPostId} />
                    <h2>Funding News</h2>
                    {cardContent}
                </div>
                <div className="sidebarContent">
                    <Sidebar posts={this.state.posts} />
                </div>
            </div>
        )
    }
}

export default Content
