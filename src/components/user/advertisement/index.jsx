import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Advertisement() {
  return (
    <div className='container' style={{paddingBlock:"70px 90px"}}>
      <div className="advertisement">
        <div className="poster1">
          <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/1.jpg" alt="" />
          <div className="info ">
            <h2>Fresh Fruits Healthy Products</h2>
            <h3><span>30% off sale</span> Hurry Up!</h3>
            <div className="advshop">
            <Link to="/products" >Shop Now</Link>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Advertisement