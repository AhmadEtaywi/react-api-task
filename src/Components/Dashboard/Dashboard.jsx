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


  const [searchValue, setSearchValue] = useState('');
  const [displayCount, setDisplayCount] = useState(5);


  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

function posted(){
const b = document.querySelector('.add-post-btn')
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


    posted()




  };

  const showComments = (postId) => {


    // navigate(`/comments/?postId=${postId}`, { state: { postId:postId, postBody: SelectedPost.body } });
    navigate(`/comments/?postId=${postId}`);
  }
  return (
    <>

{/* 213123123213 */}

    {/* 23213213123 */}
    <div className="Discover-page">
      <div className="Discover">
        <p >Discover</p>
        <p>WHAT'S NEW TODAY</p>
      </div>

      <div className="test1">

      <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search Posts" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>

        {posts
                  .filter(post => post.body.toLowerCase().includes(searchValue.toLowerCase()))
                  .slice(0, displayCount)
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
                className="comment-textarea"
                placeholder="Add Comment"
                onKeyPress={e => handleKeyPress(e, post.id)}
              />
            </div>
          )
          )
        }
        <div>

        <button className="show-more" onClick={handleLoadMore}>Show More</button>
        </div>

          <img alt="" onClick={posted}
          src={TabBar} className="tab-bar" />

      </div>

      

      <div className="newPost-Container">
        <textarea style={{ display:'none'}} className="addPost-text"
          rows="5" cols="33"
          type="textarea"
          placeholder="Enter new post"
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
        />
        <button style={{ display:'none'}} className="add-post-btn" onClick={addNewPost}>Add post</button>
       </div>
       </div>
    </>
  );
};

export default Dashboard