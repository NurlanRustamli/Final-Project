import React from 'react'
import Team from '../../../components/user/team'
import Services from '../../../components/user/services'
import "./style.css"

function AboutUs() {
    return (
        <section id='about-us'>
            <div className="container">
                <div className="row">
                    <div className="about-imgs col-lg-5 col-xl-5 col-md-12 col-sm-12">
                        <div className='grid1'>
                            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about.png" alt="" />
                        </div>
                        <div className='grid2'>
                            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about-2.png" alt="" />
                        </div>
                        <div className='grid3'>
                            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/about-3.png" alt="" />
                        </div>
                    </div>
                    <div className="about-info col-lg-7 col-xl-7 col-md-12 col-sm-12">
                        <h1>Who We <span>Are?</span></h1>
                        <h2>WE’RE HERE TO SERVE ONLY THE BEST PRODUCTS FOR YOU. ENRICHING YOUR HOMES WITH THE BEST ESSENTIALS.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            <br />
<br />
                            Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
<br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <Services />

            <Team />
        </section>
    )
}

export default AboutUs