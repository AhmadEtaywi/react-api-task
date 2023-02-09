import React,{useState,useEffect} from "react";
import Ellipse from '../Dashboard/imgs/Ellipse.png'

function ClickedPost(){
    const postId = new URLSearchParams(window.location.search).get("postId");

    const [posts, setPosts] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userName = currentUser.username;
    const name1 = currentUser.name;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then((Response) => Response.json())
          .then((posts) => {
            setPosts(posts);
          });
      }, [postId]);


    return (
        <>
        <div className='comments-post'>
            <div className='selectedPost-id'>
                <img alt="" src={Ellipse} className='comments-img' />
                <div className='selectedPost-id-2'>
                    <h6>{name1}</h6>
                    <h6>{userName}</h6>
                </div>
            </div>

            <p className='post-body'>{posts.body}</p>
        </div>
    </>
    )
}

export default ClickedPost