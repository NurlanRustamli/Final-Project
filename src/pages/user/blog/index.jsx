import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogsApi } from '../../../services/base'
import Pagination from '../../../components/user/pagination'
import "./style.css"

function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogsApi.getAllBlog().then(data => setBlogs(data), [])
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)


  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogs.slice(firstPostIndex, lastPostIndex)
  return (
    <section id='blog-sec'>
      <div className="container">
        <div className="row">
          <header>Blog Page</header>
        </div>
        <div className="row">
          {
            currentPosts.map((item) => (
              <div className="blog-out col-lg-4 col-xl-4 col-md-6 col-sm-11">
                <div className="blog">
                  <div className="blogimg">
                    <img src={item.images} alt="" />
                  </div>
                  <div className="blog-info">
                    <h5><span>{item.date}</span> - <span>{item.type}</span></h5>
                    <h3>{item.title}</h3>
                    <p>{item.quickdesc}</p>
                    <Link to={"/blog/"+item.id}>Read More</Link>
                  </div>
                </div>
              </div>


            ))
          }
           <Pagination totalPosts={blogs.length} postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} />
        </div>
      </div>
    </section>
  )
}

export default Blog