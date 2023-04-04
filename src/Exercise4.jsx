import React, { useState, useCallback } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment", likes: 0 },
    { id: 2, text: "This is the second comment", likes: 0 },
    { id: 3, text: "This is the third comment", likes: 0 }
  ]);

  const handleLike = useCallback((id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>Likes: {comment.likes}</p>
          <button onClick={() => handleLike(comment.id)}>Like</button>
        </div>
      ))}
    </div>
  );
}
export default CommentList;
