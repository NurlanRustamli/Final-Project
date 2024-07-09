import React from 'react'
import Navbar from './navbar'
import SideBar from './sidebar'
import { Outlet } from 'react-router'
import Footer from './footer'
import Header1 from './header1'
import Header2 from './header2'
function AdminLayout() {
  return (
    <>
    <Header1/>
    <Header2/>
    <Navbar/>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminLayout