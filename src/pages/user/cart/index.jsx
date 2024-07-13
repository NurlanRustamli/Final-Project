import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { MdRemoveShoppingCart } from 'react-icons/md';
import { addToCartAction, countDecrement, removeFromCart } from '../../../redux/actions/cartListAction';
import { useNavigate } from 'react-router';
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HomeProducts from '../../../components/user/homeproducts';
import AdditionalProducts from '../../../components/user/additionalproducts';

function Cart() {
    const { cartList, isLogin } = useSelector(state => state)
    const dispatch = useDispatch()
    const changeNav = useNavigate()
    return (
        <section id="cart-sec">
            <div className="container">
                <div className="row">
                    <h1 style={{ textAlign: "center", width: "100%", paddingBlock: "20px", fontSize: "40px" }}>Your Cart</h1>
                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="summary-out col-lg-4 col-xl-4 col-md-10 col-sm-10">
                        <div className="summary d-flex justify-content-center  ">
                            <h3>Summary</h3>
                            <div className="sub-price">
                                <p>Previous Total: <span>{cartList.reduce((acc, item) => acc += item.count * parseInt(item.previousPrice), 0)} $</span></p>
                                <p>Discount Total: <span>{cartList.reduce((acc, item) => acc += item.count * parseInt(item.discountPrice), 0)} $</span></p>
                                <p>Discount: <span>{cartList.reduce((acc, item) => acc += item.count * parseInt(item.previousPrice), 0) - cartList.reduce((acc, item) => acc += item.count * parseInt(item.discountPrice), 0)} $</span></p>
                            </div>
                            <div className="totalamount">
                                <h3>Total Amount: <span>{cartList.reduce((acc, item) => acc += item.count * parseInt(item.discountPrice), 0)} $</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10">
                        {cartList.length ? cartList.map(item => (
                            <div className='d-flex justify-content-between' style={{ width: "100%", paddingInlineStart: "10px" }} key={item.id}>
                                <div className="cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <h4>Product</h4>
                                    <div className="cart-product">
                                        <img src={item.image} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>
                                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                    <h4 style={{ textAlign: "center" }}>Price</h4>
                                    <h4>$ {item.discountPrice}</h4>
                                </div>
                                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                    <h4>Quantity</h4>
                                    <div className="cart-pr-qua">
                                        <div className="img-hover-icons" onClick={() => isLogin ?
                                            item.count===1? dispatch(removeFromCart({ ...item })):dispatch(countDecrement({ ...item }))
                                             : changeNav("/login")}>
                                            <BsCartDashFill />
                                        </div>
                                        <h4>{item.count}</h4>
                                        <div className="img-hover-icons" onClick={() =>{ isLogin ? 
                                            dispatch(addToCartAction({ ...item })) : changeNav("/login")}}>
                                            <BsCartPlusFill />
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                    <h4 style={{ textAlign: "center" }}>Total</h4>
                                    <h4>$ {item.count * item.discountPrice}</h4>
                                </div>
                                <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                    <h4>Remove</h4>
                                    <div className="d-flex align-items-center" style={{ width: "100%", height: "40px" }} onClick={() => isLogin ? dispatch(removeFromCart({ ...item })) : changeNav("/login")}>
                                        <MdRemoveShoppingCart style={{ width: "100%", height: "30px" }} />
                                    </div>
                                </div>
                            </div>
                        )) : <div className='empty-c' style={{ textAlign: "center", width: "100%" }}>Cart is empty</div>}
                        {cartList.length ? <div className="checkout"><Link to="/checkout">Checkout</Link></div> : null}
                    </div>
                </div>

            </div>
            <HomeProducts/>
        </section>
    )
}

export default Cart;