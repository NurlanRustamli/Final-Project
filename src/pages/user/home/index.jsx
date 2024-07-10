import React from 'react'
import Products from '../../../components/user/products'
import Slider from '../../../components/user/slider'
import Advertisement from '../../../components/user/advertisement'
import TopItems from '../../../components/user/topitems'
import Types from '../../../components/user/types'


function Home() {
  return (
    <main>
        <Slider/>
        <Types/>
        <Advertisement/>
        <Products />
        <TopItems/>
        <Advertisement/>

    </main>
  )
}

export default Home