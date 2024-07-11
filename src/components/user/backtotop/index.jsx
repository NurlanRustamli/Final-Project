import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import scroolToTop from '../../../provider/scroolToTop'
import './style.css'
import { Link } from 'react-router-dom'

function BackToTop() {
  return (
    <div className='backtotop'>
       <Link to='/' onClick={()=>scroolToTop()}><FaArrowUp id='backtop'/></Link>
    </div>
  )
}

export default BackToTop