import React from 'react'
import { useSelector } from 'react-redux'
import "./style.css"

function CommentsSection(props) {
  // const {userData}=useSelector()
  const allComments = props.allComments
  const productId = props.productId
  return (
    <section id='commentssec'>
      <div className="container">
        <div className="row fd-column">
          <div className="commentRead">
            <h3>UserName:</h3>
            <h3>Comment:</h3>
            <h3>Rating:</h3>
          </div>
          {
            allComments.length > 0 ? (
              allComments.map((comment) => (
                comment.productId === productId ? (
                  <div className='commentRead' key={comment.id}>
                    <h4>{comment.username}</h4>
                    <p>{comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                  </div>
                ) : null
              ))
            ) : (
              <div>There are no comments</div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default CommentsSection