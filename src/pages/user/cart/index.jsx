import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../../components/user/productcard'
import './style.css'

function Cart() {
    let totalPrice = 0;
    const { cartList } = useSelector(state => state)
    return (
        <div className='d-flex justify-content-center fd-column align-items-center'>
            <div className="cart-heading">Your Cart

            </div>
            <div className="cartlist d-flex">

                {cartList.length ?
                    cartList.map(item =>

                        <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6 cartlistitem' key={item.id}>
                            <div >Count: <span className='count'>{item.count}</span></div>
                            <div >
                                Quantity Price: <span className="totalPrice">{item.count * parseInt(item.discountPrice)}$</span>


                            </div>


                            <ProductCard product={item} />
                        </div>)
                    : <div>Cart is empty</div>
                }
            </div>
                <h2 id='totalPrice'>Total Price: {cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.discountPrice) }, 0)} $</h2>
        </div >
    )
}

export default Cart