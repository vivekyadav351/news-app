import React from 'react'
import Article from '../Articles/Articles'
import Sidebar from '../SideBar/SideBar'

const FullPost = () => {
    return (
        <div className="fullPost">
            <Article />
            <Sidebar />
        </div>
    )
}

export default FullPost
