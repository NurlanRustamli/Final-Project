import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Search from '../../../components/user/search'
import { FaShoppingCart } from 'react-icons/fa'
import "./style.css"
import { RiAccountCircleFill } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'

function Header2() {
  const [sum, setSum] = useState(0)
  const { cartList, favList,isLogin,userData } = useSelector(state => state)

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
          <Link to='/'>
          <div className="ss-logo">
            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" />
          </div>
          </Link>

          <Search />
          <div className="ss-others col-lg-3 col-xl-3 col-md-4">
            <Link to={`${Object.keys(userData).length ? "/profile" : "/login"}`} style={{display:'flex',}}>
            <div className="ss-login">
              {
                userData.avatar ? <div className="ss-icon">
                <img src={userData.avatar} id='avatar' alt="" />
                </div>:<div className="ss-icon">
                <RiAccountCircleFill />
                </div>
              }
              
              <div className="ss-info">
                <p>Account</p>
                <div>
                  {/* <ul>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                  </ul> */}
                </div>
              </div>
            </div></Link>
            
            <Link to='/favorite'  id='favorite'>
            <div className="ss-wish">
              
                <div className="ss-icon">
                  {favList.length?
                  <MdFavorite />:
                  <i className="fa-regular fa-heart" />

                }
                </div>
              
              <div className="ss-info">
                <p>Wishlist</p>
                {/* <div><span>{favList.length}</span> -ITEMS</div> */}
              </div>
            
            </div>
            </Link>
            <Link to='/cart' id='cart'>
              <div className="ss-cart">
                <div className="ss-icon">
                  <FaShoppingCart />
                  <span>{sum}</span>
                </div>
                <div className="ss-info d-flex fd-column justify-content-center">
                  <p>Cart</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header2