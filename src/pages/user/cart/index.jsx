import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { MdRemoveShoppingCart } from 'react-icons/md';
import { addToCartAction, countDecrement, removeFromCart } from '../../../redux/actions/cartListAction';
import { useNavigate } from 'react-router';
import Products from '../../../components/user/products';
import HomeProducts from '../../../components/user/homeproducts';

function Cart() {
    let totalPrice = 0;
    const { cartList } = useSelector(state => state)
    const dispatch = useDispatch()
    const changeNav = useNavigate()
    return (
        <section id="cart-sec">
            <div className="container">
                <div className="row">
                    <h1 style={{ textAlign: "center", width: "100%", paddingBlock: "20px", fontSize: "40px" }}>Your Cart</h1>
                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="summary d-flex justify-content-center  col-lg-4 col-xl-4 col-md-10 col-sm-10">
                        <h3>Summary</h3>
                        <div className="sub-price">
                            <p>Previous Total: <span >{cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.previousPrice) }, 0)} $</span></p>
                            <p>Discount Total: <span>{cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.discountPrice) }, 0)} $</span></p>
                            <p>Discount: <span>{cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.previousPrice) }, 0) - cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.discountPrice) }, 0)} $</span></p>
                        </div>
                        <div className="totalamount">
                            <h3>Total Amount: <span>{cartList.reduce((acc, item) => { return acc += item.count * parseInt(item.discountPrice) }, 0)} $</span></h3>
                        </div>
                    </div>
                    <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10">


                        {cartList.length ?
                            cartList.map(item =>


                                <div className='d-flex justify-content-between ' style={{ width: "100%", paddingInlineStart: "10px" }}>


                                    <div className=" cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <h4>Product</h4>
                                        <div className="cart-product">
                                            <img src={item.image} />
                                            <h4>{item.name}</h4>
                                        </div>
                                    </div>
                                    <div className=" cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                        <h4 style={{ textAlign: "center" }}>Price</h4>
                                        <h4>$ {item.discountPrice}</h4>
                                    </div>
                                    <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                        <h4 >Quantity</h4>
                                        <div className="cart-pr-qua"><button onClick={() => isLogin ? dispatch(countDecrement(item)) : changeNav("/login")} >-</button>
                                            <h4>{item.count}</h4>
                                            <button onClick={() => dispatch(addToCartAction(item))}>+</button>
                                        </div>
                                    </div>
                                    <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">

                                        <h4 style={{ textAlign: "center" }}>Total</h4>
                                        <h4>$ {item.count * item.discountPrice} </h4>
                                    </div>
                                    <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                        <h4 >Remove</h4>
                                        <div className="img-hover-icons d-flex align-items-center" style={{ width: "100%", height: "40px" }}
                                            onClick={() => isLogin ? dispatch(removeFromCart(item)) : changeNav("/login")}>
                                            <MdRemoveShoppingCart style={{ width: "100%", height: "30px" }} />
                                        </div>
                                    </div>
                                </div>

                            )
                            : <div className='empty-c'>Cart is empty</div>
                        }
                    </div>
                    
                </div>
            </div>
          
            <HomeProducts />
        </section>




    )
}

export default Cart