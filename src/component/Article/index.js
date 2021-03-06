import React, {useState, useEffect} from 'react'
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import ArticleStyle from './Article.styled';

const Article = (props) => {

    return (
        <ArticleStyle>
            <h1>{props.title}</h1>
            <img src={props.image} alt="A1"  />
            <div className="AuthDate">
                <AiOutlineUser />
                <p>{props.author}</p>
                <div>|</div>
                <AiOutlineClockCircle />
                <p>{props.date}</p>
            </div>
            <p>{props.desc}</p>
            <p><b>Tags:</b>{props.tag}</p>
        </ArticleStyle>
    )
}

export default Article
