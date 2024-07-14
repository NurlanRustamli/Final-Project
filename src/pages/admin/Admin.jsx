import { useState } from 'react'
import '../../assets/css/admin/App.css'
import Header from '../../components/admin/Header'
import Sidebar from '../../components/admin/Sidebar'
import HomeAdmin from './HomeAdmin'
import { Outlet } from 'react-router'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Outlet/>
    </div>
  )
}

export default Admin
