import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import scroolToTop from '../../../provider/scroolToTop'

function BottomNavbar() {
  return (
    <>

      <section id="bottomnav">
        <div className="container">
          <div className="row justify-content-between">

            <div className="nav-left col-lg-3 col-xl-3 col-md-4 col-sm-6">
              <Link to="/">
                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" alt="" />

              </Link>
              <p style={{ paddingBlock: "5px", paddingInlineEnd: "5px" }}>Grabit is the biggest market of grocery products. Get your daily needs from our store.</p>
            </div>
            <div className="nav-left col-lg-2 col-xl-2 col-md-4 col-sm-6">
              <h3>Category</h3>
              <ul>
                <li ><Link to="/products/dairy">Dairy</Link></li>
                <li ><Link to="/products/snack">Snack</Link></li>
                <li ><Link to="/products/bakery">Bakery</Link></li>
                <li ><Link to="/products/juice">Juice</Link></li>
              </ul>
            </div>
            <div className="nav-lm col-lg-2 col-xl-2 col-md-4 col-sm-6">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li ><Link to="/contact">Contact Us</Link></li>
                <li ><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="nav-rm col-lg-2 col-xl-2 col-md-6 col-sm-6">
              <h3>Account</h3>
              <ul>
                <li><Link to="/login">Sign In</Link></li>
                <li ><Link to="/cart">View Cart</Link></li>
              </ul>
            </div>
            <div className="nav-right col-lg-3 col-xl-3 col-md-6 col-sm-12">
              <h3>Contact</h3>
              <div className="location">
                <FaLocationDot style={{ color: "green", marginRight: "5px" }} />

                <Link>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</Link>
              </div>
              <div className="whatsapp">
                <FaWhatsapp style={{ color: "green", marginRight: "5px" }} />
                <a href="tel:+99450505000">+994505050500</a>
              </div>
              <div className="email" >
                <MdOutlineMail style={{ color: "green", marginRight: "10px" }} />
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </div>

            </div>
          </div>

        </div>
        <br />

      </section >
    </>
  )
}

export default BottomNavbar