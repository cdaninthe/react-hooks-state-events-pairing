import React from "react";
import video from "../data/video";

function Video({video}){

    return(
        <div>
            <iframe width="919" height="525" frameBorder="0"allowFullScreen
            src={video.embedUrl}
            title={video.title}
            />
        </div>
       
    )
}

export default Video;