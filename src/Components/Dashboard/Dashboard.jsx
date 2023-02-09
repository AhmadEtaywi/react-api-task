import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Ellipse from './imgs/Ellipse.png';
import TabBar from './imgs/TabBar.jpg';
import './Dashboard.css';


function Dashboard() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPost, setNewPost] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  useEffect(() => {
    
    getPosts(currentUser);
    // eslint-disable-next-line
  }, []);

  const getPosts = (user) => {
    const { id } = user;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((Response) => Response.json())
      .then((posts) => {
        setPosts(posts);
      });
  };
  
  const handleKeyPress = (e, postId) => {
    if (e.key === "Enter") {
      const comment = {
        postId,
        text: e.target.value,
        username: currentUser.username,
        name: currentUser.name
      };
      setComments([...comments, comment]);
      e.target.value = "";
      
    }
  };

  const addNewPost = (e) => {
    const newPost1 = {
      body: newPost,
    };
    setPosts([newPost1, ...posts]);
    setNewPost('');
  };

  const showComments = (postId) => {


    // navigate(`/comments/?postId=${postId}`, { state: { postId:postId, postBody: SelectedPost.body } });
    navigate(`/comments/?postId=${postId}`);
  }
  return (
    <>
      <div className="Discover">
        <p >Discover</p>
        <p>WHAT'S NEW TODAY</p>
      </div>

      <div className="test1">
        {posts
          .map((post, index) => (

            <div key={Math.random()} className="inner-div">
              <div className="inner-div-2">
                <div className="post-id">
                  <img alt="" src={Ellipse} className="pro-img-class" />
                  <div className="post-id-2">
                    <h6 className="h6_name">{currentUser.name}</h6>
                    <h6 className="h6_username">@{currentUser.username}</h6>
                  </div>
                </div>
                <p className="js-body" id={post.id} onClick={() => showComments(post.id, post, post.body)}>
                  {post.body}
                </p>
              </div>
              {comments
                .filter(comment => comment.postId === post.id)
                .map(comment => (
                  <div key={comment.text} className="comment">
                    <div className="comment-id-2">
                      <img alt="" className="comment-img" src={Ellipse} />
                      <div className="comment-id">
                        <h6>{comment.name} </h6>
                        <h6>@{comment.username}</h6>
                      </div>
                    </div>
                    <p className="posts-comment">{comment.text}</p>
                  </div>
                ))}
              {/* text area for comments */}
              <textarea
                className="textarea15"
                placeholder="Add Comment"
                onKeyPress={e => handleKeyPress(e, post.id)}
              />
            </div>
          ))}

          <img alt="" onClick={
          () => {
            const b = document.querySelector('.test-btn')
            const l = document.querySelector('.addPost-text')
            if (l.style.display === "none") {
              l.style.display = "block"
              b.style.display = "block"
            }
            else {
              l.style.display = "none";
              b.style.display = "none";
            }
          }
        }
          src={TabBar} className="tab-bar" />

      </div>

      <div className="newPost-Container">
        <textarea hidden className="addPost-text"
          rows="5" cols="33"
          type="textarea"
          placeholder="Enter new post"
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
        />
        <button hidden className="test-btn" onClick={addNewPost}>Add post</button>
      </div>
    </>
  );
};

export default Dashboard