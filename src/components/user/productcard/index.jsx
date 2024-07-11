import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder, MdRemoveShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import './style.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, countDecrement, removeFromCart } from '../../../redux/actions/cartListAction';
import { addToFavAction, removeFromFavAction } from '../../../redux/actions/favList.actions';

function ProductCard(props) {
  let { id, rating, previousPrice, weight, discountPrice, time, image, name, type } = props.product

  const dispatch = useDispatch()
  const { favList } = useSelector(state => state)
  function addToCart() {

    dispatch(addToCartAction(props.product))
  }
  return (
    <div className='six-product' id={time}  data-aos="fade-up" data-aos-duration="1700">

      <div className="six-img">

        <img src={image} alt={name} />
        <div className='sale new'>{time}</div>
        <div className="img-hover icons">
          <div className="img-hover-icons" onClick={addToCart}>
            <BsCartPlusFill  />
          </div>
          {
            favList.find(item => item.id === id) ?
              <div className="img-hover-icons" onClick={() => dispatch(removeFromFavAction(id))}>
                <MdFavorite  /></div> :
              <div className="img-hover-icons" onClick={() => dispatch(addToFavAction(props.product))}>
                <MdFavoriteBorder  />
              </div>
          }
          <div className="img-hover-icons" onClick={()=>dispatch(countDecrement(props.product))}>
            <BsCartDashFill />
          </div>

          <div className="img-hover-icons">
            <FaCodeCompare />
          </div>
          <div className="img-hover-icons" onClick={()=>dispatch(removeFromCart(props.product))}>
          <MdRemoveShoppingCart />
          </div>
        </div>
      </div>
      <div className="six-info">

        <Link >{type}</Link>
        <h2 title={name}>
          <Link to={'/product/' + id}>{name}</Link>
        </h2>
        <div className="w-rating d-flex justify-content-between">
          <p className='star-icon'>Rating:{rating}</p>
          <p className='weight'>{weight} kg</p>
        </div>

        <div className="price d-flex justify-content-between">
          <p className='disPrice' >{discountPrice} $</p>
          <p className='prevPrice' style={{ fontWeight: '700' }}><del>{previousPrice} $</del></p>
        </div>


      </div>

    </div>
  )
}

export default ProductCard