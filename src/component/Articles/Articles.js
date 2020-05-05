import React, { Component } from 'react'
import axios from 'axios'
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai"

import './Articles.css'
import A2 from '../../assets/images/a2.png'

class Articles extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
           
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
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
                </div>
            );
        }
        return post;
    }
}

export default Articles
