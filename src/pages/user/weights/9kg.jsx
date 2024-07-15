import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'

function NineKg() {
    const [sortedData, setSortedData] = useState([])
    const [price, setPrice] = useState(100)
    const [kg9, setKg9] = useState([])
    useEffect(() => {
        productsApi.getWeightFilteredProducts("9").then(data => setKg9(data))

    }, [])
    const handlePriceChange = (value) => {
        setPrice(value)
        const filteredProducts = kg9.filter(product => product.discountPrice <= value)
        setSortedData(filteredProducts)
    }
    return (
        <section id='types'>
            <div className="container">
                <div className="products-header">
                    <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                        <h2 className='Mainheading text-center'>Products</h2>
                        <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
                    </div>


                </div>

                <div className="row">
                    <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <Sidebar onPriceChange={handlePriceChange} price={price} />

                    </div>
                    <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6 filterproducts">
                    {kg9.length ?
                              (
                                price === 100 ?
                                    (sortedData.length ? sortedData : kg9).map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>
    
                                        <ProductCard product={item} />
                                    </div>) : (sortedData.length?sortedData.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>
    
                                        <ProductCard product={item} />
                                    </div>):<div>Products can not be found</div>)
    
    
                                     ) : <div>Products can not be found</div>
                        }
                    </div>
                </div>
            </div>


        </section>
    )
}

export default NineKg