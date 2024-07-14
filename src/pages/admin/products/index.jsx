import React, { useEffect, useState } from 'react'
import { productsApi } from '../../../services/base';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await productsApi.getAllProduct();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts()
  })

  return (

      <main className='main-container' style={{width:"100%"}}>
        <div className='main-title'>
          <h3>PRODUCTS</h3>
          <div className="addproduct">
            <button>Add Product</button>
          </div>
        </div>
        <div className='main-cards'  style={{width:"100%",display:'flex'}}>
          <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10"   style={{width:"100%"}}>
            {products.map(item => (
              <div className='d-flex justify-content-between' style={{ width: "100%", paddingInlineStart: "10px" }} key={item.id}>
                <div className="cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <h4>Product</h4>
                  <div className="cart-product">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                </div>
                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <h4 style={{ textAlign: "center" }}>Discount Price</h4>
                  <h4>$ {item.discountPrice}</h4>
                </div>
            
                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  <h4 style={{ textAlign: "center" }}>Previous Price</h4>
                  <h4>$ {item.previousPrice}</h4>
                </div>

              </div>
            ))}

          </div>
          
        </div>
      </main>

  )
}

export default Products