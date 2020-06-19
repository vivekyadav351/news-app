import React, {useState, UseEffect} from 'react';
import axios from 'axios'
import './CommentBox.css'
import UsersComment from '../UsersComment/index'

const CommentBox = () => {

    const [commentData, setCommentData] = useState({
        userName: '',
        comment: ''
    });

    const [commentList, setCommentList] = useState([]);

    const inputChangeHandler = (event) => {
        setCommentData({
            comment: event.target.value,
            userName: event.target.value,
        });
       
    }

    const onSubmitCommentHandler = (e) => {
        e.preventDefault();
        setCommentList(commentList.concat(commentData));
    }

    return (
        <div className="commentBox">
            <h4>Leave a comment here</h4>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={commentData.userName}
                        onChange={inputChangeHandler} />
                </div>
                <textarea 
                    type="text" rows="5" 
                    col="30" 
                    placeholder="Add a comment"
                    value={commentData.comment}
                    onChange={inputChangeHandler}
                      />
                <button onClick={onSubmitCommentHandler}>Comment</button>
            </form>
            {
                commentList.map((data, i) => (
                <UsersComment
                    key={i}
                    userName={data.userName}
                    comment={data.comment} />
                ))
            }
        </div>
    )
}

export default CommentBox
