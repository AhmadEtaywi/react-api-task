import React ,{useState,useEffect} from 'react'
import Ellipse from '../Dashboard/imgs/Ellipse.png'
import './comments.css'
import './RecieavedComponents.css'

function RecieavedComments() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser.username;
  const name1 = currentUser.name;
  const postId = new URLSearchParams(window.location.search).get("postId");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((Response) => Response.json())
      .then((comments) => {
        setComments(comments);
      });
  }, [postId]);

  return (

    <>
      <div className="showComments1">
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            <div className='comments-id'>
              <img alt="" src={Ellipse} className='comments-img' />
              <div className='comments-id-2'>
                <h6>{name1}</h6>
                <h6>{userName}</h6>
              </div>
            </div>
            <h6 className="h6-comment">{comment.body}</h6>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default RecieavedComments