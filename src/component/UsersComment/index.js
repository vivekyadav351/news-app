import React from 'react';
import UserCommentStyle from './UserComment.styled'

const UsersComment = (props) => {
    return (
        <UserCommentStyle>
            <h3>{props.userName}</h3>
            <p>{props.comment}</p>
        </UserCommentStyle>
    )
}

export default UsersComment
