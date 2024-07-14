import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'
function Fruits() {
    const [typeData,setTypeData] =useState([])
    useEffect(()=>{
     productsApi.getTypeFilteredProducts("fruit").then(data=>setTypeData(data))
 
 },[])
    
     return (
         <section id='types'>
                <div className="container">
                <div className="products-header">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 text-center">
                    <h2 className='Mainheading text-center'>Products</h2>
                    <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
                </div>


            </div>

                <div className="row">
             <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6">
                 <Sidebar />
             </div>
             <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6 filterproducts">
                 {
                     typeData.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>
 
                         <ProductCard product={item} />
                     </div>)
                 }
             </div>
             </div></div>
         </section>
     )
}

export default Fruits