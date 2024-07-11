import React from 'react'
import Products from '../../../components/user/products'
import Slider from '../../../components/user/slider'
import Advertisement from '../../../components/user/advertisement'
import TopItems from '../../../components/user/topitems'
import Types from '../../../components/user/types'
import Newsletter from '../../../components/user/newsletter'


function Home() {
  return (
    <main>
      <Newsletter />
      <div data-aos="zoom-in" data-aos-duration="1500">
        <Slider />
      </div>

      <Types />
      <div data-aos="zoom-in" data-aos-duration="1500">

        <Advertisement />
      </div>
      <Products />
      <TopItems />
      <Advertisement />
    </main>
  )
}

export default Home