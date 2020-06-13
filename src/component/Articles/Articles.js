import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialGooglePlus, TiSocialInstagram } from "react-icons/ti";

import './Articles.css'
import Content from '../../container/Content/Content'
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
                </div>
            );
        }
        return (
            <div className="articlePage">
                <Content>
                    {post}
                </Content>
                <div className="share">
                    <h3>Please share this</h3>
                    <div className="socialIcon">
                        <Link to="/#"><TiSocialFacebook /></Link>
                        <Link to="/#"><TiSocialLinkedin /></Link>
                        <Link to="/#"><TiSocialGooglePlus /></Link>
                        <Link to="/#"><TiSocialInstagram /></Link>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Articles
