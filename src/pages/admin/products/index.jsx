import React, { useEffect, useRef, useState } from 'react'
import { blogsApi, productsApi } from '../../../services/base';
import "./style.css"
import { IoIosRemoveCircle } from 'react-icons/io';
import axios from 'axios';
import { CiEdit } from 'react-icons/ci';

function Products() {
  const [itemId, setItemId] = useState("")
  const addModal = document.querySelector(".addmodalsection")
  const newDiscountModal = document.querySelector(".newDiscount")
  const newPreviousModal = document.querySelector(".newPrevious")
  const [products, setProducts] = useState([]);
  const prName = useRef(null)
  const prImage = useRef(null)
  const prRating = useRef(null)
  const prCount = useRef(null)
  const prType = useRef(null)
  const prDisPrice = useRef(null)
  const newDisPrice = useRef(null)
  const prPrevPrice = useRef(null)
  const newPrevPrice = useRef(null)
  const prWeight = useRef(null)
  const prTime = useRef(null)
  const prId = useRef(null)
  const pr = useRef(null)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await productsApi.getAllProduct();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts()
  })

  const addProduct = async (e) => {
    e.preventDefault()
    const productAddResponse = await productsApi.addProduct({
      name: prName.current.value,
      image: prImage.current.value,
      type: prType.current.value,
      previousPrice: parseFloat(prPrevPrice.current.value),
      discountPrice: parseFloat(prDisPrice.current.value),
      time: prTime.current.value,
      rating: parseFloat(prRating.current.value),
      weight: parseFloat(prWeight.current.value),
      count: parseFloat(prCount.current.value),
      id: prId.current.value

    }); console.log(productAddResponse.status)
    // if (productAddResponse.status ===) {

    // }
  }
  const handleEditClick = (id, type) => {
    if (type === 'discount') {
      newDiscountModal.style.display = "block";
    } else if (type === 'previous') {
      newPreviousModal.style.display = "block";
    }
    setItemId(id)
    console.log('Edit clicked for item with id:', id);
  };
  const refreshDiscountPrice = async (e) => {
    e.preventDefault()
    const foundProduct = await productsApi.getSingleProduct(itemId)

    try {
      await productsApi.changeDiscountProduct(foundProduct, parseFloat(newDisPrice.current.value))
    } catch {
      console.error('Error updating product discount', error);
      throw error;
    }

  }
  const refreshPreviousPrice =async (e) => {
    e.preventDefault()
    const foundProduct = await productsApi.getSingleProduct(itemId)

    try {
     await productsApi.changePreviousProduct(foundProduct, parseFloat(newPrevPrice.current.value))
    } catch {
      console.error('Error updating product previous', error);
      throw error;
    }

  }

  return (

    <main className='main-container' style={{ width: "100%" }}>
      <div className='main-title'>
        <h3>PRODUCTS</h3>
        <div className="addproduct">
          <button onClick={() => { addModal.style.display = "block" }}>Add Product</button>
        </div>
      </div>
      <div className='main-cards' style={{ width: "100%", display: 'flex' }}>
        <div className="cart-list col-lg-8 col-xl-8 col-md-10 col-sm-10" style={{ width: "100%" }}>
          {products.map(item => (
            <div className='d-flex justify-content-between' style={{ width: "100%", paddingInlineStart: "10px" }} key={item.id}>
              <div className="cart-pr-list col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h4>Product</h4>
                <div className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Discount Price</h4>


                <h4 className='d-flex justify-content-between' style={{ alignItems: "center" }}>$ {item.discountPrice} <div style={{ fontSize: "30px" }} onClick={() => handleEditClick(item.id, 'discount')}><CiEdit /></div></h4>



              </div>

              <div className="cart-pr-list col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Previous Price</h4>

                <h4 className='d-flex justify-content-between' style={{ alignItems: "center" }}>$ {item.previousPrice}
                  <div onClick={() => handleEditClick(item.id, 'previous')} style={{ fontSize: "30px" }}><CiEdit /></div>
                </h4>

              </div>
              <div className="cart-pr-list adminremove col-xl-2 col-lg-2 col-md-2 col-sm-2">
                <h4 style={{ textAlign: "center" }}>Remove</h4>
                <button id='adminremoveicon' onClick={() => { productsApi.deleteProduct(item.id) }}><IoIosRemoveCircle /></button>
              </div>

            </div>
          ))}

        </div>
        <div className="add-modal newDiscount">
          <form onSubmit={refreshDiscountPrice}>
            <div>
              <label htmlFor="">New Product Discount Price:</label>
              <br />
              <input type="text" name="" id="" ref={newDisPrice} />
            </div>
            <button type='submit'>Add</button>
            <button onClick={() => { newDiscountModal.style.display = "none" }}>Close</button>
          </form>
        </div>
        <div className="add-modal newPrevious">
          <form onSubmit={refreshPreviousPrice}>
            <div>
              <label htmlFor="">New Product Previous Price:</label>
              <br />
              <input type="text" name="" id="" ref={newPrevPrice} />
            </div>
            <button type='submit'>Add</button>
            <button onClick={() => { newPreviousModal.style.display = "none" }}>Close</button>
          </form>
        </div>
        <div className="add-modal addmodalsection">

          <form onSubmit={addProduct}>
            <div>
              <label htmlFor="">Product Name:</label>
              <br />
              <input type="text" name="" id="" ref={prName} />
            </div>
            <div>
              <label htmlFor="">Product Image:(please upload as a link)</label>
              <br />
              <input type="text" name="" id="" ref={prImage} />
            </div>
            <div>
              <label htmlFor="">Product type:</label>
              <br />
              <select name="" id="" ref={prType}>
                <option value="">Choose Type</option>
                <option value="Snack">Snack</option>
                <option value="Juice">Juice</option>
                <option value="Bakery">Bakery</option>
                <option value="Dairy">Dairy</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Product Time:</label>
              <br />
              <select name="" id="" ref={prTime}>
                <option value="">Choose Time</option>
                <option value="new">new</option>
                <option value="old">old</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Product Discount Price:</label>
              <br />
              <input type="text" name="" id="" ref={prDisPrice} />
            </div>
            <div>
              <label htmlFor="">Product Previous Price:</label>
              <br />
              <input type="text" name="" id="" ref={prPrevPrice} />
            </div>
            <div>
              <label htmlFor="">Product Weight:</label>
              <br />
              <input type="text" name="" id="" ref={prWeight} />
            </div>
            <div>
              <label htmlFor="">Product Count:</label>
              <br />
              <input type="text" name="" id="" value="0" ref={prCount} disabled />
            </div>
            <div>
              <label htmlFor="">Product Rating:</label>
              <br />
              <input type="text" name="" id="" value="0" ref={prRating} disabled />
            </div>
            <div>
              <label htmlFor="">Product Id:</label>
              <br />
              <input type="text" name="" id="" value={products.length + 1} ref={prId} disabled />
            </div>
            <br />
            <button type='submit'>Add</button>
            <button onClick={() => { addModal.style.display = "none" }}>Close</button>
          </form>
        </div>
      </div >
    </main >

  )
}

export default Products