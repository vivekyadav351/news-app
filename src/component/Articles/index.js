import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import axios from 'axios';
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import Social from '../SocialSharing';
import RelatedArticles from '../RelatedArticles';
import './Articles.css'
import Content from '../../container/Content';
import A2 from '../../assets/images/a2.png'

class Articles extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                });
            }
        }
    }
    
    render() {
        let post = <p>Select Post</p>
        if (this.props.id) {
            post = <p>Loading....</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className="articles">
                    <h1>{this.state.loadedPost.title}</h1>
                    <img src={A2} alt="A1" />
                    <div className="AuthDate">
                        <p><AiOutlineUser />  Palermo</p>
                        <p><AiOutlineClockCircle />  Date</p>
                    </div>
                    <p>{this.state.loadedPost.body}</p>
                    <p><b>Tags:</b> sint, nihil, reprehenderit, dolor, beatae, ea, dolores</p>
                    <Social />
                    <RelatedArticles />
                </div>
            );
        }
        return (
            <div className="articlePage">
                <Content>
                    {post}
                </Content>
                
            </div>
            
        );
    }
}

export default Articles
