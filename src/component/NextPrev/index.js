import React from 'react'
import {Link} from 'react-router-dom'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import NextPrevStyle from './NextPrev.styled';

const index = (props) => {
    return (
        <NextPrevStyle>
            <Link to='/#'><AiOutlineArrowLeft /><p>Previous Page</p></Link>
            <Link to='/#'><p>Next Page</p><AiOutlineArrowRight /></Link>
        </NextPrevStyle>
    )
}

export default index
