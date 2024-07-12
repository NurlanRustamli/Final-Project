import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../../components/user/productcard'
import "./style.css"

function Favorite() {
  const { favList } = useSelector(state => state)
  return (<section id="favorite-sec">
    <div className='container'>
      <div className='d-flex justify-content-center fd-column align-items-center'>
        <div className="fav-heading">Your Wishlist

        </div>
        <div className="favlist d-flex">

          {favList.length ?
            favList.map(item =>

              <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6 cartlistitem' key={item.id}>
                <ProductCard product={item} />
              </div>) : <div className='empty-w'>Wishlist is empty</div>
          }
        </div>
      </div >
    </div>
  </section>
  )
}

export default Favorite