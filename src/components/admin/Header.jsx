import React, { useEffect, useState } from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { productsApi } from '../../services/base'

function Header({ OpenSidebar }) {
  
  const { userData } = useSelector(state => state)
  return (
    <header className='adminheader'>
      <div className='menu-icon'>

        <BsJustify className='adminicon' onClick={OpenSidebar} />
      </div>
   
      <div className='header-right ' style={{textAlign:"right",width:"100%"}}>
        
        <img src={userData.avatar} className="adminicon" alt="" />        </div>
    </header>
  )
}

export default Header