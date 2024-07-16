import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./style.css"

function CommentsSection(props) {
  // const {userData}=useSelector()
  
  let sum =0;
  const [ratingtotal, setratingtotal] = useState(0)
  const allComments = props.allComments
  const productId = props.productId
  const product = props.product
  const filteredComments = allComments.filter(item => item.productId == product.id)
  filteredComments.forEach((item) => {
    sum += item.rating
  })
  useEffect(() => {
    setratingtotal(Math.round(sum / filteredComments.length))
  },[])
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
          <div>Total Rating: {sum/filteredComments.length}</div>
        </div>
      </div>
    </section>
  )
}

export default CommentsSection