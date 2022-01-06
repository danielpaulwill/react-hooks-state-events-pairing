import React, { useState } from "react";

function Votes({ video }) {
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)

  function handleUpVote() {
    setUpVotes(upVotes + 1)
  }

  function handleDownVote() {
    setDownVotes(downVotes + 1)
  }

  return (
  <div>
  <h2>Votes</h2>
  <button onClick={handleUpVote}>{upVotes} 👍</button>
  <button onClick={handleDownVote}>{downVotes} 👎</button>
</div>
)
}

export default Votes;