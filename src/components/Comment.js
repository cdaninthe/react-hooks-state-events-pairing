import React from "react";

function Comment({user, comment, onRemoveCommentClick}){

    return(
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={onRemoveCommentClick}>Remove Comment</button>
        </div>
    )

}

export default Comment;