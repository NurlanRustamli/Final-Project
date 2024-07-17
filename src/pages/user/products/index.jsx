import React, { useEffect, useState, useCallback } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import Products from '../../../components/user/products'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [price, setPrice] = useState(100)

  useEffect(() => {
    productsApi.getAllProduct().then(data => {
      setProducts(data)
      setSortedData(data)
    })
  }, [])

  const handlePriceChange = (value) => {
    setPrice(value)
    const filteredProducts = products.filter(product => product.discountPrice <= value)
    setSortedData(filteredProducts)
  }

  const sortProducts = (e) => {
    let sortedArray = [...sortedData]
    if (e.target.value === "1") {
      sortedArray.sort((a, b) => a.discountPrice - b.discountPrice)
    } else if (e.target.value === "2") {
      sortedArray.sort((a, b) => b.discountPrice - a.discountPrice)
    } else if (e.target.value === "3") {
      sortedArray.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    } else if (e.target.value === "4") {
      sortedArray.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    }
    setSortedData(sortedArray)
  }

  return (
    <div id='types'>
      <div className="container">
        <div className="products-header">
          <div className="section-heading col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
            <h2 className='Mainheading text-center'>Products</h2>
            <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
          </div>
          <div className="sorting">
            <select name="" id="productssort" onChange={sortProducts} >
              <option value="">Sort by</option>
              <option value="1">Low to High</option>
              <option value="2">High to Low</option>
              <option value="3">A-Z</option>
              <option value="4">Z-A</option>
            </select>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-12 filterrow">
            <Sidebar onPriceChange={handlePriceChange} price={price} />
          </div>
          <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6 filterproducts">
            <Products data={sortedData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage