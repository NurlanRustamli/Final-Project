import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import scroolToTop from '../../../provider/scroolToTop'

function Navbar() {
  return (
    <section className='Navbar'>
      <div className="container">
        <div className="row navbar">
          {/* <div className="category col-lg-3 col-xl-3 col-md-4 col-sm-4">
            <Link to='/'>All Categories</Link>
            <div className="cat-div">
              <div className="cat-left col-lg-5 col-xl-5 col-md-5 col-sm-5">
                <button className="prod">Dairy</button>
                <button className="prod">Fruit</button>
                <button className="prod">Snack</button>
                <button className="prod">Juice</button>
              </div>
              <div className="cat-middle col-lg-3 col-xl-3 col-md-3 col-sm-3">
                <ul className="dairy">
                  <p className="cat-title">Dairy</p>
                  <li>Milk</li>
                  <li>Ice Cream</li>
                  <li>Cheese</li>
                  <li>Frozen Custard</li>
                  <li>Frozen Yogurt</li>
                </ul>
                <ul className="dairy">
                  <p className="cat-title">Fruits</p>
                  <li>Milk</li>
                  <li>Ice Cream</li>
                  <li>Cheese</li>
                  <li>Frozen Custard</li>
                  <li>Frozen Yogurt</li>
                </ul>
                <ul className="dairy">
                  <p className="cat-title">Snacks</p>
                  <li>Milk</li>
                  <li>Ice Cream</li>
                  <li>Cheese</li>
                  <li>Frozen Custard</li>
                  <li>Frozen Yogurt</li>
                </ul>
                <ul className="juice">
                  <p className="cat-title">Juice</p>
                  <li>Mango</li>
                  <li>Coconut</li>
                  <li>Tetra</li>
                  <li>Apple</li>
                  <li>Lychee</li>
                </ul>
              </div>
              <div className="cat-sidebar"></div>
            </div>
          </div> */}
          <a href="tel:+"></a>
          <div className="navbarinner col-lg-6 col-xl-6 col-md-12 col-sm-12 d-flex justify-content-center">
            <div onClick={()=>scroolToTop()}><Link to='/' >Home</Link></div>
            <div onClick={()=>scroolToTop()}><Link to='/contact'>Contact</Link></div>
            <div onClick={()=>scroolToTop()}><Link to='/blog' >Blog</Link></div>
            <div onClick={()=>scroolToTop()}><Link to='/products' >Shop</Link></div>
          </div>
          {/* <div className="col-lg-3 col-xl-3 col-md-4 col-sm-4"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Navbar