import React from 'react'
import './assets/css/reset.css'
import './assets/css/layout.css'
import './assets/css/style.css'
import UserLayout from './layout/user'
import Home from './pages/user/home'
import Detail from './pages/user/detail'
import Contact from './pages/user/contact'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Search from './pages/user/search'
import Login from './pages/user/login'
import { Route, Routes } from 'react-router'
import { productsApi } from './services/base.js'
import Help from './pages/user/help/index.jsx'
import './index.css'
import Cart from './pages/user/cart/index.jsx'
import Favorite from './pages/user/favorite/index.jsx'
import Blog from './pages/user/blog/index.jsx'
import ProductsPage from './pages/user/products/index.jsx'
import Register from './pages/user/register/index.jsx'
import Profile from './pages/user/profile/index.jsx'
import { useSelector } from 'react-redux'
import NotFound from './pages/user/notfound/index.jsx'
import Terms from './pages/user/terms/index.jsx'
import ScroolToTop from './provider/scroolToTop.jsx'
import Checkout from './pages/user/checkout/index.jsx'
import Successful from './pages/user/succesfulpayment/index.jsx'
import AboutUs from './pages/user/aboutus/index.jsx'
import Dairy from './pages/user/categories/dairy.jsx'
import Juice from './pages/user/categories/juice.jsx'
import Bakery from './pages/user/categories/bakery.jsx'
import Fruits from './pages/user/categories/fruits.jsx'
import Vegetables from './pages/user/categories/vegetables.jsx'
import Snack from './pages/user/categories/snack.jsx'
import SixKg from './pages/user/weights/6kg.jsx'
import FiveKg from './pages/user/weights/5kg.jsx'
import FourKg from './pages/user/weights/4kg.jsx'
import ThreeKg from './pages/user/weights/3kg.jsx'
import TwoKg from './pages/user/weights/2kg.jsx'
import OneKg from './pages/user/weights/1kg.jsx'
import NineKg from './pages/user/weights/9kg.jsx'
import EightKg from './pages/user/weights/8kg.jsx'
import SevenKg from './pages/user/weights/7kg.jsx'
import BlogDetailPage from './pages/blogDetailPage/index.jsx'
import Admin from './pages/admin/Admin.jsx'
import HomeAdmin from './pages/admin/HomeAdmin.jsx'
import BlogAdmin from './pages/admin/blog/index.jsx'


function App() {
  const { isLogin, userData } = useSelector(state => state)
  productsApi.getAllProduct()
  return (
    <>  
    <ScroolToTop />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<Home />} index />
          <Route element={<Detail />} path='product/:id' />
          <Route element={<Search />} path='search/:name' />
          <Route element={<Help />} path='help' />
          <Route element={<Contact />} path='contact' />
          <Route element={<Cart />} path='cart' />
          <Route element={<Favorite />} path='favorite' />
          <Route element={<Login />} path='login' />
          <Route element={<Register />} path='register' />
          <Route element={<Blog />} path='blog' />
          <Route element={<ProductsPage />} path='/products' />
          <Route element={<Terms />} path='/terms' />
          <Route element={<AboutUs />} path='about' />
          <Route element={<Dairy />} path='products/dairy' />
          <Route element={<Snack />} path='products/snack' />
          <Route element={<Vegetables />} path='products/vegetables' />
          <Route element={<Fruits />} path='products/fruits' />
          <Route element={<Bakery />} path='products/bakery' />
          <Route element={<Juice />} path='products/juice' />
          <Route element={<OneKg />} path='products/onekg' />
          <Route element={<TwoKg />} path='products/twokg' />
          <Route element={<ThreeKg />} path='products/threekg' />
          <Route element={<FourKg />} path='products/fourkg' />
          <Route element={<FiveKg />} path='products/fivekg' />
          <Route element={<SixKg />} path='products/sixkg' />
          <Route element={<SevenKg />} path='products/sevenkg' />
          <Route element={<EightKg />} path='products/eightkg' />
          <Route element={<NineKg />} path='products/ninekg' />
          <Route element={<BlogDetailPage />} path='blog/:id' />
          {
            isLogin ? <Route element={<Checkout />} path='/checkout' /> : null
          }
          {
            isLogin ? <Route element={<Successful />} path='/successful' /> : null
          }
          {
            isLogin ? <Route element={<Profile />} path='/profile' /> : null
          }
          <Route element={<NotFound />} path='*' />
        </Route>
        {
          userData.email === "admin@grabit.az" ? <Route path='/admin' element={<Admin />}>
            <Route element={<HomeAdmin />} index />
            <Route element={<Products />} path='products' />
            <Route element={<Users />} path='users' />
            <Route element={<BlogAdmin />} path='users' />
          </Route> : null
        }
      </Routes>
    </>
  )
}

export default App
