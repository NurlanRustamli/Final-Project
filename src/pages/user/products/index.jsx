import React from 'react'
import Products from '../../../components/user/products'


function ProductsPage() {
    return (
        <div className='Products'>

            <div className="products-header">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                    <h2 className='Mainheading text-center'>Products</h2>
                    <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
                </div>
                <div className="sorting">
                    <select name="" id=""></select>
                </div>

            </div>

            <Products />
        </div>
    )
}

export default ProductsPage