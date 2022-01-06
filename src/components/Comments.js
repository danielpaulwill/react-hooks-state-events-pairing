import React, { useState } from "react";

function Comments({ video }) {
  const [hideComments, setHideComments] = useState(true)

  function handleOnClick() {
    setHideComments(!hideComments)
  }

  const commentArray = video.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.comment}</p>
      </div>
    )
  })

  return (
  <div>
    <br></br>
    <button onClick={handleOnClick}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
    <hr></hr>
    <h2>{video.comments.length} Comments</h2>
    {hideComments ? commentArray : null}
  </div>
  )
}

export default Comments;