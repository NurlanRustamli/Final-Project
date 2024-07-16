import React from 'react'
import Slider from '../../../components/user/slider'
import Advertisement from '../../../components/user/advertisement'
import Types from '../../../components/user/types'
import Newsletter from '../../../components/user/newsletter'
import HomeProducts from '../../../components/user/homeproducts'
import Services from '../../../components/user/services'


function Home() {
  return (
    <main>
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Slider />
      </div>

      <Types />

      <HomeProducts />
      <Services />
      {/* <TopItems /> */}
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Advertisement />

      </div>
    </main>
  )
}

export default Home