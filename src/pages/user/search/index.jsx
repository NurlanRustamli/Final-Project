import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'

function Search() {
  const {name}=useParams()
  const [products,setProducts]= useState([])
  useEffect(()=>{
    productsApi.getSearchProduct(name).then(res=>{
      if (res.status === 200) {
        setProducts(res.data)
      }else{
        setProducts([])
      }
    })
  },[name])
  console.log(products)
  return (
    <div className='container' style={{marginBlock:"10px 120px"}}>
      <h1  className='text-center' style={{color:"green", fontSize:"50px",marginBlock:"20px"}}>Search</h1>
      <div className="row">
      <h3 style={{
        marginBlock:"20px"
      }}>Key word for search:{name}</h3>
      </div>
      

{products.length ?
                    products.map(item =>

                        <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6 cartlistitem' style={{
                          marginBlock:"20px"
                        }} key={item.id}>
                            <ProductCard product={item} />
                        </div>)
                    : <div>Not Found</div>
                }
    </div>
  )
}

export default Search