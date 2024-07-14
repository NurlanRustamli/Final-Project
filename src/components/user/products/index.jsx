import React, { useEffect, useState } from 'react'
import ProductCard from '../productcard'
import './style.css'
import Pagination from '../pagination'
import { productsApi } from '../../../services/base'

function Products(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getAllProduct().then(data => setProducts(data), [])
    })
    const sortedData = props.data
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setfirst] = useState(8)


    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = (sortedData?.length?sortedData:products).slice(firstPostIndex, lastPostIndex)
    return (
        <section id='sixth-section products'>
            <div className='container'>
                
                <div className="row sixth-main">
                    {
                        currentPosts?.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' style={{marginBottom:"100px"}}  key={item.id}>

                            <ProductCard product={item} />
                        </div>)
                    }
                    <Pagination totalPosts={(sortedData?.length?sortedData:products).length} postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage} />

                </div>

            </div>
        </section>
    )
}

export default Products