import React from 'react';
import './UsersComment.css';

const UsersComment = (props) => {
    return (
        <div className="usersComment">
            <h3>{props.userName}</h3>
            <p>{props.comment}</p>
        </div>
    )
}

export default UsersComment
