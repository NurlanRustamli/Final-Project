import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { removeUserDataAction } from '../../../redux/actions/userdata.actions'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Profile() {
  // const loginData = JSON.parse(localStorage.getItem("LoginInfo"))
  const nav = useNavigate()
  const { userData } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <section id="profile-sec">
      <div className='container'>
        <div className="row">
          <h1 id='profinfo ' style={{width:"100%",textAlign:"center"}}>Profile Info:</h1>
          <h1 className='profname col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 text-center' style={{width:"100%"}}>Full Name: <span>{userData.fullName}</span></h1>
          <h1 className='profemail col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 text-center' style={{width:"100%"}}>Email: <span>{userData.email}</span></h1>
          <div className="profphoto">
            <h2>Profile Photo:</h2>
            <img src={userData.avatar} className='profavatar' alt="" />
          </div>
          <button onClick={() => {
            dispatch(removeUserDataAction())
            alert("Successfully Log Out")
            nav("/login")
          }}>Log Out</button>

          {userData.email === "admin@grabit.az"?
            <Link to="/admin">Admin Dashboard</Link>:null
          }

        </div>

      </div>
    </section>

  )
}

export default Profile