import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { productsApi } from '../../../services/base'
import "./style.css"
import { BsCartDashFill, BsCartPlusFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, countDecrement, removeFromCart } from '../../../redux/actions/cartListAction'
// import Products from '../../../components/user/products'
import AdditionalProducts from '../../../components/user/additionalproducts'
import Comments from '../../../components/user/comments'
// import CommentsSection from '../../../components/user/commentsSection'

function Detail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { cartList, isLogin, userData } = useSelector(state => state)
  const dispatch = useDispatch()
  const changeNav = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await productsApi.getSingleProduct(id);
            const productData = response; // Adjust this if your response structure is different
            const foundProduct = cartList.find(item => item.id === productData.id);

            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setProduct({ ...productData, count: 0 });
            }
        } catch (error) {
            console.error('Error fetching product', error);
        }
    };

    fetchProduct();
}, [id, cartList]);

if (!product) {
    return <div>Loading...</div>;
}

  return (
    <section className="detail-product">
      <div className='container'>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-5 col-md-7 col-sm-12 detailimg">
            <img id='detailimg' src={product.image} alt={product.name} />
          </div>
          <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
            <h1>{product.name}</h1>
            <div className="detail-info">
              <h3>Rating: <span>{product.rating}/5</span></h3>
              <div className="detail-price">
                <h3>Discount Price: <span>{product.discountPrice}$</span></h3>
                <h5>Previous Price: <span>{product.previousPrice}$</span></h5>
              </div>
              <div className="detail-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, enim reprehenderit.
              </div>
              <div className="detail-bot-info">
                <h3>Type: <span>{product.type}</span></h3>
                <h3>Weight: <span>{product.weight} kg</span></h3>
              </div>
              <div className="detail-cart">
                <div className="img-hover-icons" onClick={() => isLogin ? product.count === 1 ? dispatch(removeFromCart({ ...product })) : dispatch(countDecrement({ ...product })) : changeNav("/login")}>
                  <BsCartDashFill />
                </div>
                <h4>{product.count}</h4>
                <div className="img-hover-icons" onClick={() => isLogin ? dispatch(addToCartAction({ ...product })) : changeNav("/login")}>
                  <BsCartPlusFill />
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* <div className="row">
        </div> */}
        </div>
      <Comments productId={id} userName={userData.fullName} productName={product.name} product={product} productCount={product.count} />

        <div className='container'>
        <div className="row">
          <header style={{ textAlign: 'center', width: "100%", paddingBlock: "20px" }}><h1>Related <span style={{ color: "rgb(0, 128, 83)" }}>Products</span> </h1>
            <p>Browse The Collection of Top Products</p>
          </header>
          <AdditionalProducts />
        </div>
      </div>

    </section>
  )
}

export default Detail