import React, {useState} from "react";

function VideoDetails({video}){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function handleUpvotes(){
        const newCount = upvotes + 1
        setUpvotes(newCount)
    }

    function handleDownvotes(){
        const newCount = downvotes + 1
        setDownvotes(newCount)
    }

    return(
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvotes}>{upvotes} 👍</button>
            <button onClick={handleDownvotes}>{downvotes} 👎</button>
        </div>
    )
}

export default VideoDetails;