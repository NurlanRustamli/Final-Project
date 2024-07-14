import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" className="icon_header" alt="" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/products">
                    <BsFillArchiveFill className='icon'/> Products
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/blog">
                    <BsFillGrid3X3GapFill className='icon'/> Blog
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/users">
                    <BsPeopleFill className='icon'/> Users
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar