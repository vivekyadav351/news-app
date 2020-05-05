import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Posts.css'

import Cards from '../../component/Cards/Cards'
import Articles from '../../component/Articles/Articles'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
          console.log(this.props);
        
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        image: require('../../assets/images/a2.png')
                    }
                });
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
    }

    postClickHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Link to={"/" + post.id} key={post.id}>
                    <Cards
                        title={post.title}
                        desc={post.body}
                        image={post.image}
                        clicked={() => this.postClickHandler(post.id)} />
                </Link>
            )
        });
        return (
            <div className="Posts">
                <Articles id={this.state.selectedPostId} />
                {posts}
            </div>
        )
    }
}

export default Posts
