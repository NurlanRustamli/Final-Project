import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../../../components/user/search'

function Header2() {
  const [sum, setSum] = useState(0)
  const { cartList, favList } = useSelector(state => state)

  useEffect(() => {
    setSum(cartList.reduce((acc, item, index, arr) => {
        return acc += item.count
    }, 0))
}, [cartList])
console.log(cartList)
return (
  <div id='second-sec'>
    <div className="container">
      <div className="row justify-content-between">
        <div className="ss-logo">
          <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" />
        </div>
        <Search/>
        <div className="ss-others col-lg-3 col-xl-3 col-md-4">
          <div className="ss-login">
            <div className="ss-icon">
              <i className="fa-regular fa-user" />
            </div>
            <div className="ss-info">
              <p>Account</p>
              <div>LOGIN
                <ul>
                  <li><Link to='/register'>Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ss-wish">
            <Link to='/favorite'>
              <div className="ss-icon">
                <i className="fa-regular fa-heart" />
              </div>
            </Link>
            <div className="ss-info">
              <p>Wishlist</p>
              <div><span>{favList.length}</span> -ITEMS</div>
            </div>

          </div>
          <div className="ss-cart">
            <Link to='/cart'>
              <div className="ss-icon">
                <i className="fa-solid fa-bag-shopping" />
              </div>
            </Link>



            <div className="ss-info">
              <p>Cart</p>
              <div><span>{sum}</span> -ITEMS</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Header2