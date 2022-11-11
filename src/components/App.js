import React, {useState} from "react";
import Video from "./Video.js";
import VideoDetails from "./VideoDetails.js";
import CommentsList from "./CommentsList.js";
import video from "../data/video.js";

function App() {
  const [comments, setComments] = useState(video.comments)

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <VideoDetails video={video} />
      <CommentsList 
        comments={comments} setComments={setComments}
      />
    </div>
  );
}

export default App;
