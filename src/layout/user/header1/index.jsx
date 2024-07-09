import React from 'react'

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
                <div className="fs-slogan col-xl-4 col-lg-4 col-md-4">World's Fastest Online Shopping Destination</div>
                <div className="fs-others col-xl-4 col-lg-4 col-md-4">
                    <div className="fs-help"><a href="#" className="fs-help">Help?</a></div>
                    <div className="fs-track"><a href="#" className="fs-track">Track Order?</a></div>
                    <div className="fs-lang-name">
                        <a href="#">English</a>
                        <ul>
                            <li><a href>English</a></li>
                            <li><a href>Italiano</a></li>
                        </ul>
                    </div>
                    <div className="fs-exchange">
                        <a className="fs-e-a" href=" ">Dollar</a>
                        <ul>
                            <li><a href>USD $</a></li>
                            <li><a href>EURO</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header1