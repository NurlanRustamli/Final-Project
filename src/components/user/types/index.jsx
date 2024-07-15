import React from 'react'
import { Link } from 'react-router-dom'

function Types() {
    return (
        <section id="fifth-section" style={{paddingBlock:"90px"}}>
            <div class="container">
                <div class="row">
                    <div class="fif-product-out ">
                    <Link to="/products/fruits">
                        <div class="fif-product text-center" 
                        style={{backgroundColor: "rgb(255,246,236 )"}}>
                            <div class="fif-pr">
                                <span>30%</span>
                                <i class="fa-solid fa-apple-whole"></i>
                                <h5>Fruits</h5>
                            </div>
                        </div></Link>
                    </div>

                    <div class="fif-product-out ">
                    <Link to="/products/bakery">
                        <div class="fif-product text-center" style={{backgroundColor: "rgb(226,253,226)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-bread-slice"></i>
                                <h5>Bakery</h5>
                            </div>
                        </div></Link>
                    </div>

                    <div class="fif-product-out "><Link to="/products/vegetables">
                        <div class="fif-product text-center" style={{backgroundColor: "rgb(255 ,234 ,233)"}}>
                            <div class="fif-pr">
                                <span>15%</span>
                                <i class="fa-solid fa-carrot"></i>
                                <h5>Vegetables</h5>
                            </div>
                        </div></Link>
                    </div>

                    <div class="fif-product-out "><Link to="/products/dairy">
                        <div class="fif-product text-center" style={{backgroundColor: "rgb(253,225,245)"}}>
                            <div class="fif-pr">
                                <span>10%</span>
                                <i class="fa-solid fa-cow"></i>
                                <h5>Dairy & Milk</h5>
                            </div>
                        </div></Link>
                    </div>

                    <div class="fif-product-out "><Link to="/producst/snack">
                        <div class="fif-product text-center" style={{backgroundColor: "rgb(236,240,255)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-cookie-bite"></i>
                                <h5>Snack & Spice</h5>
                            </div>
                        </div></Link>
                    </div>

                    <div class="fif-product-out "><Link to="/products/juice">
                        <div class="fif-product text-center" style={{backgroundColor: "rgb(249,249,217)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-whiskey-glass"></i>
                                <h5>Juice & Drinks</h5>
                            </div>
                        </div></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Types