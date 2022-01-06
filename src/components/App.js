import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import Votes from "./Votes"
import Comments from "./Comments"

function App() {


  return (
    <div className="App">
      <Video video={video}/>
      <Votes video={video}/>
      <Comments video={video}/>
    </div>
  );
}

export default App;
