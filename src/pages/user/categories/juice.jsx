import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'
function Juice() {
    const [juiceData, setJuiceData] = useState([])
    useEffect(() => {
        productsApi.getTypeFilteredProducts("juice").then(data => setJuiceData(data))

    }, [])

    return (
        <section id='types'>
            <div className="container">
            <div className="products-header">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                    <h2 className='Mainheading text-center'>Products</h2>
                    <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
                </div>
                <div className="sorting">
                        <select name="" id="">
                            <option value="1">High to Low</option>
                            <option value="2">Low to High</option>
                            <option value="3">A-Z</option>
                            <option value="4">Z-A</option>
                        </select>
                    </div>

            </div>

                <div className="row">
                    <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6 filterproducts">
                        {
                            juiceData.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>

                                <ProductCard product={item} />
                            </div>)
                        }
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Juice