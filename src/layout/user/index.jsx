import React from 'react'
import Header1 from './header1'
import Header2 from './header2'
import Navbar from './navbar'
import BottomNavbar from './bottomnavbar'
import Footer from './footer'
import { Outlet } from 'react-router'
import BackToTop from '../../components/user/backtotop'


function UserLayout() {
  return (
    <>
      <header>
        <Header1 />
        <Header2 />
        <Navbar />
      </header>
      <Outlet />
      <BottomNavbar/>
      <Footer />
      <BackToTop/>
    </>
  )
}

export default UserLayout