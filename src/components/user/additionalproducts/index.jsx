import React, { useEffect, useState } from 'react'
import { productsApi } from '../../../services/base'
import ProductCard from '../productcard'

function AdditionalProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getAllProduct().then(data => setProducts(data), [])
    })
    const screenProducts = products.slice(0,8)
  return (
    <div>
        <div className="row sixth-main">
                    {
                        screenProducts.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>

                            <ProductCard product={item} />
                        </div>)
                    }
              

                </div>
    </div>
  )
}

export default AdditionalProducts