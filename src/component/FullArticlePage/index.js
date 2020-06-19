import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import Social from '../SocialSharing';
import RelatedArticles from '../RelatedArticles';
import Article from '../Article/Article'
import Content from '../../container/Content';
import BlogPost from '../../data/blog.json'
import NextPrev from '../NextPrev/index'
import CommentBox from '../CommentBox/index'


const FullArticlePage = (props) => {

    const [post, setPost] = useState({
        id : '',
        blogCategory : '',
        blogTitle : '',
        slug : '',
        postedOn : '',
        author : '',
        blogImage : '',
        blogText : ''
    });

    const [relatedPost, setRelatedPost] = useState([]);

    const [postId, setPostId] = useState('');

    const [ID, setID] = useState(0);

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = BlogPost.data.find(post => post.id == postId);
        const ID = postId;
        const relatedPost = BlogPost.data;
        setRelatedPost(relatedPost);
        setPost(ID);
        setPost(post);
        setPostId(postId);
        console.log(post);
    }, [post, relatedPost, props.match.params.postId]);
    
    if (post.blogImage === '') {
        return null;
    }

    const relatedPosts = relatedPost.slice(0, 2).map(post => {
        return (
            <Link to={`/startup-news/${post.id}`} key={post.id}>
                <RelatedArticles
                    title={post.blogTitle}
                    image={require(`../../assets/images/${post.blogImage}`)}
                    desc={post.blogText} />
            </Link>
        )
    })



    return (
            <Content>
                <Article
                    title={post.blogTitle}
                    image={require(`../../assets/images/${post.blogImage}`)}
                    author={post.author}
                    date={post.postedOn}
                    desc={post.blogText}
                    tag={post.slug} />
                <Social />
                <NextPrev />
                {relatedPosts}
                <CommentBox />

            </Content>
    )
}

export default FullArticlePage
