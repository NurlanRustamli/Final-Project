import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogsApi } from '../../services/base'
import "./style.css"
import Contact from '../user/contact';

function BlogDetailPage() {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const foundBlog = await blogsApi.getSingleBlog(id);
                setBlog(foundBlog);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);
    console.log(blog)
    return (
        <section id='blogdetailsec'>
            <div className="container">
                <header>
                    <h1>Blog {blog.id} Detail</h1>
                    <img src={blog.images} alt="" />
                </header>
                <main>
                    <h3><span>{blog.date}</span>-<span>{blog.type}</span></h3>
                    <h1>{blog.title}</h1>
                    <p>{blog.desc1}</p>
                    <div className="footerimgs d-flex justify-content-between">
                        <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/4.jpg" alt="" />
                        <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/blog/3.jpg" alt="" />
                    </div>
                </main>
         
            </div>
            <Contact/>
        </section>
    )
}

export default BlogDetailPage