import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import PostsStyle from './Posts.styled'
import BlogPost from '../../data/blog.json';

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = BlogPost.data;
        setPosts(posts);
    }, [posts]);

    if (posts.blogImage === '') {
        return null;
    }

    const postss = posts.map(post => {
        return (
            <Link to={`/startup-news/${post.id}`} key={post.id}>
                <div className="Cards">
                    <img src={require(`../../assets/images/${post.blogImage}`)} alt="A1" />
                    <h1>{post.blogTitle}</h1>
                </div>
            </Link>
        )
    })

    return (
        <PostsStyle>
            {postss}
        </PostsStyle>
    )
}

export default Posts
