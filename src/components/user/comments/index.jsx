import React, { useEffect, useRef, useState } from 'react'
import { commentsApi } from '../../../services/base';

function Comments(props) {
    const productId = props.productId
    const commentInput =useRef()
    const commentSelect = useRef()
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)
    const handleChange = (e) => {
        const selectedValue = parseInt(e.target.value);
        if (selectedValue !== 0) {
            setRating(selectedValue);
        } else {
            alert('Please select a valid number');
        }
    };
    const sendComment = (e) => {
        e.preventDefault();
        const commentPost = {
            productId: productId,
            comment: comment,
            rating: rating,
        };
        commentsApi.postComment(commentPost)
            .then(response => {
                console.log('Comment posted successfully', response);
                // Handle success (e.g., clear form, show success message)
                commentInput.current.value=""
                commentSelect.current.value =1
            })
            .catch(error => {
                console.error('Error posting comment', error);
                // Handle error (e.g., show error message)
            });
    };

    return (
        <section id='comments-sec'>
            <div className="container">
                <div className="row" >
                    
                    <form onSubmit={sendComment} style={{width:"100%"}}>
                    
                        <div style={{width:"100%",paddingBlock:"10px"}}>
                            <label htmlFor="" style={{fontSize:"17px"}}>Comment:</label>
                            <br />
                            <input type="text" name="" id="commentInp" ref={commentInput} onChange={(e) => setComment(e.target.value)} placeholder='Enter your comment...' />

                        </div>
                        <div style={{width:"100%",paddingBlock:"10px"}} >
                            <label htmlFor="" style={{fontSize:"17px"}}>Rating:</label>
                            <br />
                            <select name="" id="rating" ref={commentSelect} value={rating} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <button type='submit' id='commentBtn'>
                            Send
                        </button>
                    </form>

                </div>
                <div className="row">

                </div>
            </div>
        </section>
    )
}

export default Comments