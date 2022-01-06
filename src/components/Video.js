import React from "react";

function Video({ video }) {
  console.log(video)
  return (
  <div>
    <iframe
    width="919"
    height="525"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
  />
  <h2>{video.title}</h2>
  <p>{video.views} Views | Uploaded {video.createdAt}</p>
</div>
)
}

export default Video;