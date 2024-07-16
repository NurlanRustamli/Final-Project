import React, { useEffect, useState, useCallback } from 'react'
import { commentsApi, productsApi } from '../../../services/base';
import { useSelector } from 'react-redux';
import CommentsSection from '../commentsSection';
import debounce from 'lodash/debounce'; // You'll need to install lodash

function Comments(props) {
    const { isLogin } = useSelector(state => state)
    const { productId, product, userName } = props
    const [allComments, setAllComments] = useState([])
    const [totalRating, setTotalRating] = useState(0);
    const [formData, setFormData] = useState({
        comment: "",
        rating: 1,
        name: ""
    })
    const [shouldFetchComments, setShouldFetchComments] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    };

    const sendComment = async (e) => {
        e.preventDefault();
        const commentPost = {
            productId: productId,
            comment: formData.comment,
            rating: parseInt(formData.rating),
            username: isLogin ? userName : formData.name
        };
        
        try {
            // Post the new comment
            await commentsApi.postComment(commentPost);
            
            // Fetch updated comments immediately
            const response = await commentsApi.getFilteredComments(productId);
            const updatedComments = response.data;
            
            // Calculate new rating
            const relevantComments = updatedComments.filter(comment => comment.productId === productId);
            const total = relevantComments.reduce((acc, comment) => acc + comment.rating, 0);
            const newRating = relevantComments.length ? Math.round(total / relevantComments.length) : 0;
            
            // Update product with new rating
            await productsApi.changeProduct(newRating, product);
            
            // Update state
            setAllComments(updatedComments);
            setTotalRating(newRating);
            setFormData(prev => ({ ...prev, comment: "", rating: 1 }));
            
            // No need to set shouldFetchComments to true, as we've already fetched the latest comments
        } catch (error) {
            console.error('Error posting comment or updating product', error);
        }
    };

    const fetchComments = useCallback(debounce(async () => {
        try {
            const response = await commentsApi.getFilteredComments(productId);
            const data = response.data;
            setAllComments(data)
            computeRating(data);
        } catch (error) {
            console.error('Error fetching comments', error);
        }
        setShouldFetchComments(false);
    }, 500), [productId]);

    const computeRating = (comments) => {
        const relevantComments = comments.filter(comment => comment.productId === productId);
        const total = relevantComments.reduce((acc, comment) => acc + comment.rating, 0);
        const averageRating = relevantComments.length ? Math.round(total / relevantComments.length) : 0;
        setTotalRating(averageRating);
    };

    useEffect(() => {
        if (shouldFetchComments) {
            fetchComments();
        }
    }, [shouldFetchComments, fetchComments]);

    return (
        <section id='comments-sec'>
            <div className="container">
                <div className="row" >
                    <form onSubmit={sendComment} style={{ width: "100%" }}>
                        {!isLogin && (
                            <div style={{ width: "100%", paddingBlock: "10px" }}>
                                <label htmlFor="name" style={{ fontSize: "17px" }}>Name:</label>
                                <br />
                                <input type="text" name="name" id="nameInp" style={{width:"100%",paddingBlock:"10px"}} value={formData.name} onChange={handleChange} placeholder='Enter your name...' />
                            </div>
                        )}
                        <div style={{ width: "100%", paddingBlock: "10px" }}>
                            <label htmlFor="comment" style={{ fontSize: "17px" }}>Comment:</label>
                            <br />
                            <input type="text" name="comment" id="commentInp" value={formData.comment} onChange={handleChange} placeholder='Enter your comment...' />
                        </div>
                        <div style={{ width: "100%", paddingBlock: "10px" }} >
                            <label htmlFor="rating" style={{ fontSize: "17px" }}>Rating:</label>
                            <br />
                            <select name="rating" id="rating" value={formData.rating} onChange={handleChange}>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        <button type='submit' id='commentBtn'>Send</button>
                    </form>
                </div>
            </div>
            <CommentsSection filteredComments={allComments} product={product} productId={productId} />
        </section>
    )
}

export default Comments