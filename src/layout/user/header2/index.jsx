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
  const { cartList, favList, isLogin, userData } = useSelector(state => state)

  useEffect(() => {
    setSum(cartList.reduce((acc, item, index, arr) => {
      return acc += item.count
    }, 0))
  }, [cartList])
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <div id='second-sec'>
      <div className="container">
        <div className="row justify-content-between">

          <div className="ss-logo col-lg-2 col-xl-2 col-md-2 col-sm-12 col-xs-12">
            <div style={{ width: "100%" }}>
              <Link to='/'>
                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" />
              </Link>
            </div>

          </div>
          {/* hamburger menu */}
          <div className="mobile-container">

            <div className="topnav">
              <Link to="/" class="active"><img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" /></Link>
              <div id="myLinks">
              <Link to={`${Object.keys(userData).length ? "/profile" : "/login"}`} className="ss-login col-lg-4 col-xl-4 col-md-4">
             

                {
                  userData.avatar ? <div className="ss-icon">
                    <img src={userData.avatar} id='avatar' alt="" />
                  </div> : <div className="ss-icon">
                    <RiAccountCircleFill />
                  </div>
                }

                <div className="ss-info">
                  <p>Account</p>
          
                </div></Link>

           
                <Link to='/favorite' id='favorite'>

                  <div className="ss-icon">
                    {favList.length ?
                      <MdFavorite /> :
                      <i className="fa-regular fa-heart" />

                    }
                  </div>

                  <div className="ss-info">
                    <p>Wishlist</p>
                    {/* <div><span>{favList.length}</span> -ITEMS</div> */}
                  </div>
                </Link>
                <Link to='/cart' id='cart'>

                  <div className="ss-icon">
                    <FaShoppingCart />
                    <span>{sum}</span>
                  </div>
                  <div className="ss-info d-flex fd-column justify-content-center">
                    <p>Cart</p>
                  </div>
                </Link>
              </div>
              <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i className="fa fa-bars" />
              </a>
            </div>
          </div>
          {/* hamburger menu */}


          <Search />

          <div className="ss-others col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12">
            <div className="ss-login col-lg-4 col-xl-4 col-md-4">
              <Link to={`${Object.keys(userData).length ? "/profile" : "/login"}`} style={{ display: 'flex', }}>

                {
                  userData.avatar ? <div className="ss-icon">
                    <img src={userData.avatar} id='avatar' alt="" />
                  </div> : <div className="ss-icon">
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
                </div></Link>

            </div>

            <div className="ss-wish col-lg-4 col-xl-4 col-md-4">
              <Link to='/favorite' id='favorite'>

                <div className="ss-icon">
                  {favList.length ?
                    <MdFavorite /> :
                    <i className="fa-regular fa-heart" />

                  }
                </div>

                <div className="ss-info">
                  <p>Wishlist</p>
                  {/* <div><span>{favList.length}</span> -ITEMS</div> */}
                </div>
              </Link>

            </div>
            <div className="ss-cart col-lg-4 col-xl-4 col-md-4">
              <Link to='/cart' id='cart'>

                <div className="ss-icon">
                  <FaShoppingCart />
                  <span>{sum}</span>
                </div>
                <div className="ss-info d-flex fd-column justify-content-center">
                  <p>Cart</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header2