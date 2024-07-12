import React from 'react'
import './assets/css/reset.css'
import './assets/css/layout.css'
import './assets/css/style.css'
import UserLayout from './layout/user'
import AdminLayout from './layout/admin'
import Home from './pages/user/home'
import Detail from './pages/user/detail'
import Contact from './pages/user/contact'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Dashboard from './pages/admin/dashboard'
import Search from './pages/user/search'
import Login from './pages/user/login'
import { Route, Routes } from 'react-router'
import { productsApi } from './services/base.js'
import Help from './components/user/help/index.jsx'
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


function App() {
  const {isLogin,userData} = useSelector(state=>state)
productsApi.getAllProduct()
  return (
    <>
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
        {
          isLogin?  <Route element={<Profile />} path='/profile' />:null
        }
        <Route element={<NotFound/>} path='*'/>
        </Route>
        {
          userData.email === "admin@grabit.az"?<Route path='/admin' element={<AdminLayout />}>
          <Route element={<Dashboard />} index />
          <Route element={<Products />} path='products' />
          <Route element={<Users />} path='users' />
        </Route>:null
        }
      </Routes>
    </>
  )
}

export default App
