import React from 'react'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cartList } = useSelector(state => state)
  const changeNav = useNavigate()
  function payMethod(e) {
    e.preventDefault()
    changeNav("/successful")
  }
  return (
    <section id="cart-sec">
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center", width: "100%", paddingBlock: "20px", fontSize: "40px" }}>Check <span style={{ color: "rgb(0, 128, 111)" }}>Out</span></h1>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className='col-lg-4 col-xl-4 col-md-10 col-sm-10'>
            <div className="summary-out ">
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
                <div className="sold-products">
                  {console.log(cartList)}
                  {
                    cartList.length ? cartList.map((item) => (
                      <div key={item.id} className="checkout-item d-flex">
                        <div className='checkimg col-lg-4 col-xl-4 col-md-6 col-sm-6'>
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="checkinfo  col-lg-8 col-xl-8 col-md-6 col-sm-6">
                          <h5>{item.name}</h5>
                          <h6>Rating: {item.rating}</h6>
                          <div className="checkprice d-flex justify-content-between">
                            <h6><del>{item.previousPrice}$</del></h6>
                            <h6>{item.discountPrice}$</h6>
                          </div>
                        </div>
                      </div>
                    )) : <div>You don't have any products</div>
                  }
                </div>
              </div>

            </div>
            <div className="summary-out deliveryMethod ">
              <div className="summary d-flex justify-content-center  ">
                <h3>Delivery Method</h3>
                <div className="sub-price">
                  <p>Please select the preferred shipping method to use on this order.</p>
                  <form >
                    <div className="check-radio">
                      <div className="free">
                        <input type="radio" name="delivery" id="free" value="Free" checked />
                        <label htmlFor="free">Free</label>
                      </div>

                      <div className="five"><input type="radio" name="delivery" id="five" value="5$" />
                        <label htmlFor="five">5$</label></div>
                    </div>

                    <div className="check-com">
                      <label htmlFor="comm-check">Add Comments About Your Order</label>
                      <textarea name="" id="comm-check" ></textarea>

                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>

          <div className="billing-details-out col-lg-8 col-xl-8 col-md-12 col-sm-12">
            <div className="billing-details  ">
              <header><h3>Billing Details</h3></header>
              <main>
                <div className="checkout-opt contact-form">
                  <form onSubmit={payMethod} >
                    <div className="fullnameCheck d-flex justify-content-between" style={{ width: "100%" }} >
                      <div style={{ width: "45%" }}>
                        <label htmlFor="" style={{ width: "100%" }}>First Name:</label>
                        <br />
                        <input type="text" id='firstname' name='firstname'
                          placeholder='Your First name...' required style={{ width: "100%" }} />
                      </div>
                      <div style={{ width: "45%" }}> <label htmlFor="" style={{ width: "100%" }}>Last Name:</label>
                        <br />
                        <input type="text" id='lastname' name='lastname'
                          placeholder='Your Last name...' required style={{ width: "100%" }} /></div>


                    </div>

                    <br />
                    <div style={{ width: "100%" }}>
                      <label htmlFor="">Adress:</label>

                      <input type="text" id='useremail' name='useremail'
                        placeholder='Your address line ....' required />
                      <br />
                    </div>



                    <div className='d-flex justify-content-between' style={{ width: "100%" }}><div style={{ width: "45%" }}><label htmlFor="">City:</label>
                      <br />

                      <select name="" id="">
                        <option value="">City1</option>
                        <option value="">City2</option>
                        <option value="">City3</option>
                        <option value="">City4</option>
                      </select>
                      <br /></div>
                      <div style={{ width: "45%" }}><label htmlFor="">Post Code:</label>
                        <input type="text" id='subject' name='subject'
                          placeholder='Enter Post Code ....' required />
                        <br /></div></div>


                    <div className='d-flex justify-content-between' style={{ width: "100%" }}><div style={{ width: "45%" }}><label htmlFor="">Country:</label>
                      <input type="text" id='subject' name='subject'
                        placeholder='Enter Country ....' required />
                      <br /></div>
                      <div style={{ width: "45%" }}><label htmlFor="">Post Code:</label>
                        <input type="text" id='subject' name='subject'
                          placeholder='Enter State ....' required />
                        <br /></div></div>


                    <div className="submit-out">
                      <button type="submit" id='submit'>Pay</button>

                    </div>
                    <br />
                  </form>
                </div>
              </main>
            </div>
          </div>

        </div>

 
      </div>
    </section >

  )
}

export default Checkout