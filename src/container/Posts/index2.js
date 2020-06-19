import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Cards from '../../component/Cards'
//import Articles from '../../component/Articles/Articles'

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
                        image: require('../../assets/images/a2.png'),
                        tags: 'sint, nihil, reprehenderit, dolor, beatae, ea, dolores'
                    }
                });
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    postClickHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        console.log(this.props);
        
        const posts = this.state.posts.map(post => {
            return (
                <Link to={"/news/" + post.id} key={post.id}>
                    <Cards
                        title={post.title}
                        desc={post.body}
                        image={post.image}
                        {...this.props}
                        clicked={() => this.postClickHandler(post.id)} />
                </Link>
            )
        });
        return (
            <div className="Posts">
                <h2>Funding News</h2>
                {posts}
            </div>
        )
    }
}

export default Posts
