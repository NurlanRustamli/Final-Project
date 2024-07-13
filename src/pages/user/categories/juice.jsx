import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'
function Juice() {
    const [juiceData,setJuiceData] =useState([])
    useEffect(()=>{
     productsApi.getTypeFilteredProducts("juice").then(data=>setJuiceData(data))
 
 },[])
    
     return (
         <section id='types'>
             <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6">
                 <Sidebar />
             </div>
             <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6">
                 {
                     juiceData.map(item => <div className=' six-product-out col-lg-3 col-xl-3 col-md-3 col-sm-5 col-xs-6' key={item.id}>
 
                         <ProductCard product={item} />
                     </div>)
                 }
             </div>
         </section>
     )
}

export default Juice