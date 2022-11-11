import React, {useState} from "react";
import Comment from "./Comment";
import Filter from "./Filter";

function CommentsList({comments, setComments}){
    const [isHidden, setHidden] = useState("")
    const [search, setSearch ] = useState("")
    const [filter, setFilter] = useState("All")
    const commentWriting = comments.length > 1 ? "comments" : "comment"

    function handleHideComments(){
        setHidden(!isHidden)
    }

    function handleRemoveComment(deletedComment){
        const updatedComments = comments.filter(comment => comment.id != deletedComment.id)
        setComments(updatedComments)
    }

    function handleSearchChange(event){
        setSearch(event.target.value)
    }
    // function handleFilterChange(event){
    //     setFilter(event.target.value)
    // }

    const commentsToDisplay = comments.filter((comment) => (
        comment.user.toLowerCase().includes(search.toLowerCase())
    ))

    return(

        <div>
            <button onClick={handleHideComments}>
                {isHidden ? "Show " : "Hide "} Comments
            </button>
            <hr/>
            <div hidden={isHidden}>
                <h1>{comments.length} {commentWriting}</h1>
                <Filter 
                    onSearchChange={handleSearchChange} 
                    // onFilterChange={handleFilterChange}
                />
                {commentsToDisplay.map(comment => (
                    <Comment 
                        key={comment.id} id={comment.id}
                        user={comment.user} comment={comment.comment}
                        onRemoveCommentClick={()=>handleRemoveComment(comment)}
                    />
                    ))
                }
            </div>
            
        </div>
    )
}

export default CommentsList;