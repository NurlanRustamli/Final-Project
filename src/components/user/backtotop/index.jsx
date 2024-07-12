import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import scroolToTop from '../../../provider/scroolToTop'
import './style.css'
import { Link } from 'react-router-dom'

function BackToTop() {
  return (
    <Link onClick={()=>scroolToTop()}>
    <div className='backtotop'>
       <FaArrowUp id='backtop'/>
    </div>
    </Link>
  )
}

export default BackToTop