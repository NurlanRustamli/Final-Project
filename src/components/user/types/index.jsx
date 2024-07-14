import React from 'react'
import { Link } from 'react-router-dom'

function Types() {
    return (
        <section id="fifth-section" style={{paddingBlock:"90px"}}>
            <div class="container">
                <div class="row">
                    <div class="fif-product-out ">
                        <div class="fif-product" 
                        style={{backgroundColor: "rgb(255,246,236 )"}}>
                            <div class="fif-pr">
                                <span>30%</span>
                                <i class="fa-solid fa-apple-whole"></i>
                                <h5><Link to="/products/fruits">Fruits</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div class="fif-product-out ">
                        <div class="fif-product " style={{backgroundColor: "rgb(226,253,226)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-bread-slice"></i>
                                <h5><Link to="/products/bakery">Bakery</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div class="fif-product-out ">
                        <div class="fif-product " style={{backgroundColor: "rgb(255 ,234 ,233)"}}>
                            <div class="fif-pr">
                                <span>15%</span>
                                <i class="fa-solid fa-carrot"></i>
                                <h5><Link to="/products/vegetables">Vegetables</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div class="fif-product-out ">
                        <div class="fif-product " style={{backgroundColor: "rgb(253,225,245)"}}>
                            <div class="fif-pr">
                                <span>10%</span>
                                <i class="fa-solid fa-cow"></i>
                                <h5><Link to="/products/dairy">Dairy & Milk</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div class="fif-product-out ">
                        <div class="fif-product " style={{backgroundColor: "rgb(236,240,255)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-cookie-bite"></i>
                                <h5><Link to="/producst/snack">Snack & Spice</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div class="fif-product-out ">
                        <div class="fif-product " style={{backgroundColor: "rgb(249,249,217)"}}>
                            <div class="fif-pr">
                                <i class="fa-solid fa-whiskey-glass"></i>
                                <h5><Link to="/products/juice">Juice & Drinks</Link></h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Types