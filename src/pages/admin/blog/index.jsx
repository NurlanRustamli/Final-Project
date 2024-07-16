import React, { useEffect, useReducer, useRef, useState } from 'react'
import { blogsApi, productsApi } from '../../../services/base';
import { IoIosRemoveCircle } from 'react-icons/io';



function BlogAdmin() {
  const addModal = document.querySelector(".add-modal")
  const [blogs, setBlogs] = useState([]);
  const bTitle = useRef(null)
  const bImages = useRef(null)
  const bQuickDesc = useRef(null)
  const bDesc1 = useRef(null)
  const bType = useRef(null)
  const bDate = useRef(null)
  const bId = useRef(null)  
  const [reducerValue, forcedUpdate] = useReducer(x=>x+1,0)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await blogsApi.getAllBlog();
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      forcedUpdate()
    };
    fetchBlogs()
  },[reducerValue])

  const addBlog = async (e)=> {
    e.preventDefault()
    const blogAddResponse = await blogsApi.addBlog({
      title: bTitle.current.value,
      images: bImages.current.value,
      type: bType.current.value,
      quickdesc: bQuickDesc.current.value,
      desc1: bDesc1.current.value,
      date: bDate.current.value,
      id:bId.current.value
  });console.log(blogAddResponse.status)
  // if (productAddResponse.status ===) {
    
 forcedUpdate()
 // }
  }
  return (
    <main className='main-container' style={{ width: "100%" }}>
      <div className='main-title'>
        <h3>Blogs</h3>
        <div className="addproduct">
          <button onClick={()=>{addModal.style.display = "block"}}>Add Blog</button>
        </div>
      </div>
      <div className='main-cards' style={{ width: "100%", display: 'flex' }}>
        <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10" style={{ width: "100%" }}>
          {blogs.map(item => (
            <div className='d-flex justify-content-between' style={{ width: "100%", paddingInlineStart: "10px" }} key={item.id}>
              <div className="cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h4>Blog</h4>
                <div className="cart-product">
                  <img src={item.images} alt={item.title} />
                  <h4>{item.title}</h4>
                </div>
              </div>
              <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Quick Desc</h4>
                <h4>$ {item.quickdesc}</h4>
              </div>
              <div className="cart-pr-list adminremove col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Remove</h4>
                <button id='adminremoveicon' onClick={() => { blogsApi.deleteBlog(item.id) }}><IoIosRemoveCircle /></button>
              </div>

            </div>
          ))}

        </div>
        <div className="add-modal">
          
          <form  onSubmit={addBlog}>
            <div>
              <label htmlFor="">Blog Title:</label>
              <br />
              <input type="text" name="" id="" ref={bTitle}/>
            </div>
            <div>
              <label htmlFor="">Blog Image:(please upload as a link)</label>
              <br />
              <input type="text" name="" id="" ref={bImages}/>
            </div>
            <div>
              <label htmlFor="">Blog type:</label>
              <br />
              <input type="text" name="" id="" ref={bType}/>
              
            </div>
            <div>
              <label htmlFor="">Blog Date:</label>
              <br />
              <input type="date" name="" id="" ref={bDate} />
            </div>
            <div>
              <label htmlFor="">Blog Quick Description:</label>
              <br />
              <input type="text" name="" id="" ref={bQuickDesc}/>
            </div>
            <div>
              <label htmlFor="">Blog Description:</label>
              <br />
              <textarea type="text" name="" id="" ref={bDesc1}></textarea>
            </div>
            <div>
              <label htmlFor="">Blog Id:</label>
              <br />
              <input type="text" name="" id="" value={blogs.length+1} ref={bId} disabled/>
            </div>
            <br />
            <button type='submit'>Add</button>
            <div onClick={()=>{addModal.style.display = "none"}}>Close</div>
          </form>
        </div>
      </div >
    </main >

  )
}

export default BlogAdmin