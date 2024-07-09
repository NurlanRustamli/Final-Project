import React from 'react'

function Header2() {
  return (
    <div id='second-sec'> 
    <div className="container">
    <div className="row justify-content-between">
      <div className="ss-logo">
        <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" />
      </div>
      <div className="ss-input col-lg-5 col-xl-5 col-md-5">
        <form action>
          <input type="text" placeholder="Search Products..." />
          <button><i className="fa-solid fa-magnifying-glass" /></button>
        </form>
      </div>
      <div className="ss-others col-lg-3 col-xl-3 col-md-4">
        <div className="ss-login">
          <div className="ss-icon">
            <i className="fa-regular fa-user" />
          </div>
          <div className="ss-info">
            <p>Account</p>
            <div>LOGIN
              <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ss-wish">
          <div className="ss-icon">
            <i className="fa-regular fa-heart" />
          </div>
          <div className="ss-info">
            <p>Wishlist</p>
            <div><span>3</span> -ITEMS</div>
          </div>
        </div>
        <div className="ss-cart">
          <div className="ss-icon">
            <i className="fa-solid fa-bag-shopping" />
          </div>
          <div className="ss-info">
            <p>Cart</p>
            <div><span>3</span> -ITEMS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header2