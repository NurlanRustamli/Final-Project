import React from 'react'
import { FaTruck } from 'react-icons/fa'
import "./style.css"
import { MdSupportAgent } from 'react-icons/md'
import { CiDiscount1 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";

function Services() {
    return (
        <section id='services'>
            <div className="container">
                <div className="row header">
                    <h1>Our <span>Services</span></h1>
                    <p>Customer service should not be a department. It should be the entire company.</p>
                </div>
                <div className="row justify-content-between" >
                    <div className="service-out col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <div className="service">
                            <div >
                                <FaTruck />
                            </div>

                            <h3>Free Shipping</h3>
                            <p>Free shipping on all US order or order above $200</p>
                        </div>
                    </div>
                    <div className="service-out col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <div className="service">
                            <div>
                            <MdSupportAgent />

                            </div>
                            <h3>24X7 Support</h3>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                    <div className="service-out col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <div className="service">
                            <div>
                            <CiDiscount1 />

                            </div>
                            <h3>30 Days Return</h3>
                            <p>Simply return it within 30 days for an exchange</p>
                        </div>
                    </div>
                    <div className="service-out col-lg-3 col-xl-3 col-md-4 col-sm-6">
                        <div className="service">
                            <div>
                            <GrSecure />

                            </div>
                            <h3>Payment Secure</h3>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services