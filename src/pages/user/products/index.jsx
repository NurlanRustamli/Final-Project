import React, { useEffect, useState, useCallback } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import Products from '../../../components/user/products'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [price, setPrice] = useState(100)
  const [sortOption, setSortOption] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const data = await productsApi.getAllProduct()
      setProducts(data)
      setSortedData(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handlePriceChange = useCallback((value) => {
    setPrice(value)
    filterAndSortProducts(value, sortOption)
  }, [sortOption])

  const sortProducts = useCallback((e) => {
    const newSortOption = e.target.value
    setSortOption(newSortOption)
    filterAndSortProducts(price, newSortOption)
  }, [price])

  const filterAndSortProducts = useCallback((priceValue, sortValue) => {
    let filteredProducts = products.filter(product => product.discountPrice <= priceValue)

    switch (sortValue) {
      case "1":
        filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice)
        break
      case "2":
        filteredProducts.sort((a, b) => b.discountPrice - a.discountPrice)
        break
      case "3":
        filteredProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        break
      case "4":
        filteredProducts.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        break
      default:
        break
    }

    setSortedData(filteredProducts)
  }, [products])

  return (
    <div id='types'>
      <div className="container">
        <div className="products-header">
          <div className="section-heading col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
            <h2 className='Mainheading text-center'>Products</h2>
            <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
          </div>
          <div className="sorting">
            <select name="" id="productssort" onChange={sortProducts} value={sortOption}>
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