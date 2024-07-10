import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import './style.css'
import { Link } from 'react-router-dom';

function ProductCard({id, rating, previousPrice, weight, discountPrice, time, image, name, type }) {
  return (
    <div className='six-product' id={time}>

      <div className="six-img">

        <img src={image} alt={name} />
        <div className='sale new'>{time}</div>
        <div className="img-hover icons">
          <div className="img-hover-icons">
            <BsCartPlusFill />

          </div>
          <div className="img-hover-icons">
            <BsCartDashFill />
          </div>
          <div className="img-hover-icons">
            <MdFavoriteBorder />
          </div>
          <div className="img-hover-icons">
            <FaCodeCompare />
          </div>
        </div>
      </div>
      <div className="six-info">
        
        <Link >{type}</Link>
        <h2 title={name}>
          <Link to={'/'+id}>{name}</Link>
        </h2>
        <div className="w-rating d-flex justify-content-between">
          <p className='star-icon'>Rating:{rating}</p>
          <p className='weight'>{weight} kg</p>
        </div>

        <div className="price d-flex justify-content-between">
          <p className='disPrice' >{discountPrice} $</p>
          <p className='prevPrice' style={{fontWeight: '700'}}><del>{previousPrice} $</del></p>
        </div>


      </div>

    </div>
  )
}

export default ProductCard