import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/user/sidebarFilter'
import { productsApi } from '../../../services/base'
import SortedProducts from '../../../components/user/sortedproducst'


function ProductsPage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getAllProduct().then(data => setProducts(data), [])
       
    })
    const [sortedData,setSortedData] = useState([])

    const sortProducts = (e) => {   
        let sortedArray = [];
        if (e.target.value === "1") {
            sortedArray = [...products].sort((a, b) => a.discountPrice - b.discountPrice);
        } else if (e.target.value === "2") {
            sortedArray = [...products].sort((a, b) => b.discountPrice - a.discountPrice);
        }else if(e.target.value === "3"){
            sortedArray = [...products].sort((a, b) => {
                if(a.name.toLowerCase()<b.name.toLowerCase()) return -1
                if(a.name.toLowerCase()>b.name.toLowerCase()) return 1
return 0
            });
        }else if(e.target.value === "4"){
            sortedArray = [...products].sort((a, b) => {
                if(a.name.toLowerCase()<b.name.toLowerCase()) return 1
                if(a.name.toLowerCase()>b.name.toLowerCase()) return -1
return 0
            });
        }
        setSortedData(sortedArray);
        console.log(sortedArray,sortedData)
    };
    return (
        <div id='types'>
            <div className="container">

            <div className="products-header">
                <div className=" section-heading  col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 d-flex text-center" style={{justifyContent:"flex-end"}}>
                    <div>
                    <h2 className='Mainheading text-center'>Products</h2>
                    <p className='Subheading text-center'>Shop online for our products and get free shipping!</p>
                    </div>
                   
                    <div className="sorting" >
                    <select name="" id="productssort" onChange={sortProducts}>
                        <option value="">Sort by</option>
                        <option value="1">Low to High</option>
                        <option value="2">High to Low</option>
                        <option value="3">A-Z</option>
                        <option value="4">Z-A</option>
                    </select>
                </div>
                </div>
               
            </div>
            <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-4 col-sm-6">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-xl-9 col-md-8 col-sm-6 filterproducts">
                <SortedProducts data={sortedData}/>
            </div>
            </div>
          
            </div>

        </div>
    )
}

export default ProductsPage