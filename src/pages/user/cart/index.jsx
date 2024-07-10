import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../../components/user/productcard'

function Cart() {
    const {cartList} = useSelector(state => state)
    return (
        <div className='d-flex justify-content-center fd-column align-items-center'>
            <div className="cart-heading">Your Cart</div>
            <div className="cartlist d-flex">
            {
                    cartList.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6 cartlistitem' key={item.id}>
                    
                        <ProductCard product={item} />
                    </div>)
                }
            </div>
               



            
        </div >
    )
}

export default Cart