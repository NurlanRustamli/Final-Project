import React, { useEffect, useState } from 'react'
import "./style.css"
import { commentsApi } from '../../../services/base';

function CommentsSection(props) {
  const [ratingTotal, setRatingTotal] = useState(0)
  const filteredComments =props.filteredComments
  const productId = props.productId




  useEffect(() => {
    calculateRating()
  }, [filteredComments])

  function calculateRating() {
    if (!Array.isArray(filteredComments) || filteredComments.length === 0) {
      setRatingTotal(0)
      return
    }
    
    const sum = filteredComments.reduce((acc, item) => acc + (item.rating || 0), 0)
    setRatingTotal(Math.round(sum / filteredComments.length))
  }

  return (
    <section id='commentssec'>
      <div className="container">
        <div className="row fd-column">
          <div className="commentRead">
            <h3>UserName:</h3>
            <h3>Comment:</h3>
            <h3>Rating:</h3>
          </div>
          {Array.isArray(filteredComments) && filteredComments.length > 0 ? (
            filteredComments.map((comment) => (
              <div className='commentRead' key={comment.id}>
                <h4>{comment.username}</h4>
                <p>{comment.comment}</p>
                <p>Rating: {comment.rating}</p>
              </div>
            ))
          ) : (
            <div>There are no comments</div>
          )}
          <div>Total Rating: {ratingTotal}</div>
        </div>
      </div>
    </section>
  )
}

export default CommentsSection