import React from 'react'
import Products from '../../../components/user/products'
import Slider from '../../../components/user/slider'
import Advertisement from '../../../components/user/advertisement'
import ProductsSlider from '../../../components/user/productsslider'
import TopItems from '../../../components/user/topitems'


function Home() {
  return (
    <main>
        <Slider/>
        <ProductsSlider />
        <Advertisement/>
        <Products />
        <TopItems/>
        <Advertisement/>

    </main>
  )
}

export default Home