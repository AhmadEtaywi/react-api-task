import React from 'react'
import RecieavedComments from './RecieavedComments';
import ClickedPost from './ClickedPost';
import './comments.css'


function Comments() {
 

  return (
    <>
      <div className="Comment-Discover">
        <div className='Comment-Discover1'>

        <p >Comments</p>
        <p>WHAT'S NEW TODAY</p>
        </div>
      <ClickedPost />
      <RecieavedComments />
      </div>
    </>
  );
};

export default Comments