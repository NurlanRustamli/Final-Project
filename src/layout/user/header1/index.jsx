import React from 'react'
import { Link } from 'react-router-dom'

function Header1() {
    return (
        <div id='first-sec'>
        <div className="container">
            <div className="row">
                <div className="fs-contact col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="fs-phone">
                        <i className="fa-solid fa-phone-volume" />
                        +91 987 654 3210
                    </div>
                    <div className="fs-wp">
                        <i className="fa-brands fa-whatsapp" />
                        +91 987 654 3210
                    </div>
                </div>
                <div className="fs-slogan col-xl-4 col-lg-4 col-md-4 text-center">World's Fastest Online Shopping Destination</div>
                <div className="fs-others col-xl-4 col-lg-4 col-md-4">
                    <div className="fs-help"><Link className="fs-help" to='/help'>Help?</Link></div>
                    <div className="fs-lang-name">
                        <Link to="/">English</Link>
                        <ul>
                            <li><Link to='/'>English</Link></li>
                            <li><Link to="/it">Italiano</Link></li>
                      </ul>
                    </div>
                    <div className="fs-exchange">
                        <Link className="fs-e-a" >Dollar</Link>
                        <ul>
                            <li><Link to='/'>USD $</Link></li>
                            <li><Link to='/euro'>EURO</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header1