import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import './SideBar.css'
import BlogPost from '../../data/blog.json'

const Sidebar = (props) => {

    const [titles, setTitles] = useState([]);
    

    useEffect(() => {
        const titles = BlogPost.data;
        setTitles(titles);
    }, [titles]);

    const title = titles.slice(0, 5).map(post => {
        return (
            <NavLink to={`/startup-news/${post.id}`} key={post.id}>
                <h4>{post.blogTitle}</h4>
            </NavLink>
        )
    })

    return (
        <div className="sidebar">
            <h3>Recent News</h3>
            {title}
        </div>
    )
}

export default Sidebar
