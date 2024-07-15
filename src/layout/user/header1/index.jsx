import React from 'react'
import { Link } from 'react-router-dom'

function Header1() {
    return (
        <section style={{width:"100%"}} id='first-sec'>
        <div className="container">
            <div className="row justify-content-between">
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
                <div className="fs-slogan col-xl-4 col-lg-4 col-md-4 ">World's Fastest Online Shopping Destination</div>
                <div className="fs-others col-xl-2 col-lg-2 col-md-2">
                    <div className="fs-help"><Link className="fs-help" to='/help'>Help?</Link></div>                
                </div>
            </div>
        </div>
        </section>
    )
}

export default Header1