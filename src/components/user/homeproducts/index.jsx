import React from 'react'
import Products from '../products'

function HomeProducts() {
    return (
        <div>
            <div className="container">
            <div className="row sixth-header">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                    <h2 className='mainheading'><span style={{color:"black",marginBlock:"15px"}}>New</span> Arrivals</h2>
                    <p className='subheading'>Shop online for new arrivals and get free shipping!</p>
                </div>

            </div>
            </div>
          
            <Products />
        </div>
    )
}

export default HomeProducts