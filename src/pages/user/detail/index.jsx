import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { productsApi } from '../../../services/base'
import "./style.css"
import ProductCard from '../../../components/user/productcard'
import { FaArrowCircleDown } from 'react-icons/fa'

function Detail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    productsApi.getSingleProduct(id).then(data => setProduct(data))
  }, [id])
  console.log(product, product.id)
  return (
    <div className="detail-product">
      <div className='container'>
        <div className="row justify-content-center  fd-column align-items-center">
          <h1>{product.name}</h1>
          <img id='detailimg' src={product.image} alt="" />
          <div className="detail-info">
            <h3>Type: <span>{product.type}</span></h3>
            <h3>Rating: <span>{product.rating}</span></h3>
            <h3>Weight: <span>{product.weight}</span></h3>
            <h3>Previous Price: <span>{product.previousPrice}</span></h3>
            <h3>Discount Price: <span>{product.discountPrice}</span></h3>
          </div>
          <div className="directiontopr">
          <h3>You can add this product to your cart</h3>
          <h3>Product is below <FaArrowCircleDown /></h3>
          </div>
          <div className="detailproduct">
            <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6 cartlistitem' key={product.id}>
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Detail