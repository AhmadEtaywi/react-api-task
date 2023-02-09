import React from 'react'
import Ellipse from '../Dashboard/imgs/Ellipse.png'
import './comments.css'

function RecieavedComments(props) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser.username;
  const name1 = currentUser.name;

  return (

    <>
      <div className="showComments1">
        {props.comments.map((comment, index) => (
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