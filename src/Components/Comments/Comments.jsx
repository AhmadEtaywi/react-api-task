import React, { useState, useEffect } from 'react'
import RecieavedComments from './RecieavedComments';
import ClickedPost from './ClickedPost';
import './comments.css'


function Comments() {
  const postId = new URLSearchParams(window.location.search).get("postId");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((Response) => Response.json())
      .then((comments) => {
        setComments(comments);
      });
  }, [postId]);

  console.log(comments);
  return (
    <>
      <div className="Discover">
        <p >Comments</p>
        <p>WHAT'S NEW TODAY</p>
      </div>
      <ClickedPost />
      <RecieavedComments comments={comments} />
    </>
  );
};

export default Comments