import React, { useEffect, useRef, useState } from 'react'
import { commentsApi, productsApi } from '../../../services/base';
import { useSelector } from 'react-redux';
import CommentsSection from '../commentsSection';

function Comments(props) {
    const { isLogin } = useSelector(state => state)
    const productId = props.productId
    const productName = props.productName
    const userName = props.userName
    const commentInput = useRef()
    const commentSelect = useRef()
    const nameInput = useRef()
    const [allComments, setAllComments] = useState([])
    const [totalRating, setTotalRating] = useState(0);
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)
    const [name, setName] = useState("")
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
            username: isLogin ? userName : name
        };
        commentsApi.postComment(commentPost)
            .then(response => {
                console.log('Comment posted successfully', response);
                // Handle success (e.g., clear form, show success message)
                commentInput.current.value = ""
                commentSelect.current.value = "1"

            })
            .catch(error => {
                console.error('Error posting comment', error);
                // Handle error (e.g., show error message)
            });
    };
    const fetchComments = () => {
        commentsApi.getComment()
            .then(res => res.data)
            .then(data => {
                setAllComments(data);
                computeRating(data);
            });
    };
    const computeRating = (comments) => {
        const relevantComments = comments.filter(comment => comment.productId === productId);
        const total = relevantComments.reduce((acc, comment) => acc + comment.rating, 0);
        const averageRating = relevantComments.length ? Math.round(total / relevantComments.length) : 0;
        setTotalRating(averageRating);
        productsApi.changeProduct(averageRating, productId)
            .then(response => {
                console.log('Product rating updated successfully', response);
            })
            .catch(error => {
                console.error('Error updating product rating', error);
            });
    };
    useEffect(() => {
        fetchComments();

    }, [comment, rating]);



    return (
        <section id='comments-sec'>
            <div className="container">
                <div className="row" >

                    <form onSubmit={sendComment} style={{ width: "100%" }}>
                        {
                            isLogin ? <div style={{ width: "100%", paddingBlock: "10px" }}>
                                <label htmlFor="" style={{ fontSize: "17px" }}>Comment:</label>
                                <br />
                                <input type="text" name="" id="commentInp" value={userName} disabled placeholder='Enter your comment...' />

                            </div> : <div style={{ width: "100%", paddingBlock: "10px" }}>
                                <label htmlFor="" style={{ fontSize: "17px" }}>Name:</label>
                                <br />
                                <input type="text" name="" id="commentInp" ref={nameInput} onChange={(e) => setName(e.target.value)} placeholder='Enter your comment...' />

                            </div>
                        }

                        <div style={{ width: "100%", paddingBlock: "10px" }}>
                            <label htmlFor="" style={{ fontSize: "17px" }}>Comment:</label>
                            <br />
                            <input type="text" name="" id="commentInp" ref={commentInput} onChange={(e) => setComment(e.target.value)} placeholder='Enter your comment...' />

                        </div>
                        <div style={{ width: "100%", paddingBlock: "10px" }} >
                            <label htmlFor="" style={{ fontSize: "17px" }}>Rating:</label>
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
                <h2>Total Rating: {totalRating}</h2>
                </div>
            </div>
            <CommentsSection allComments={allComments} productId={productId} />

        </section>
    )
}

export default Comments