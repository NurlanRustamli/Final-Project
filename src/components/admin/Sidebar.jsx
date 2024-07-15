import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" className="icon_header" alt="" />
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <Link to="/admin">
                    <li className='sidebar-list-item'>

                        <BsGrid1X2Fill className='icon' /> Dashboard

                    </li>
                </Link><Link to="/admin/products">
                    <li className='sidebar-list-item'>

                        <BsFillArchiveFill className='icon' /> Products

                    </li>
                </Link>  <Link to="/admin/blog">
                    <li className='sidebar-list-item'>

                        <BsFillGrid3X3GapFill className='icon' /> Blog

                    </li>
                </Link> <Link to="/admin/users">
                    <li className='sidebar-list-item'>

                        <BsPeopleFill className='icon' /> Users

                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default Sidebar