import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import'./NextPrev.css';

const index = (props) => {
    return (
        <div className="nextPrev">
            <Link to='/#'><AiOutlineArrowLeft /><p>Previous Page</p></Link>
            <Link to='/#'><p>Next Page</p><AiOutlineArrowRight /></Link>
        </div>
    )
}

export default index
