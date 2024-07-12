import React, { useState } from 'react'
import "../../../index.css"
import { Link, useNavigate } from 'react-router-dom';
import { usersApi } from '../../../services/base';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../redux/actions/login.actions';
import { getUserDataAction } from '../../../redux/actions/userdata.actions';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ""
  })
  const nav = useNavigate()
  const dis = useDispatch()
  const loginUser = (e) => {
    e.preventDefault();
    usersApi.loginUser()
      .then(res => {
        if (res.status === 200) {
          let foundUser=res.data.find(user=>user.email===loginData.email && user.password === loginData.password)
          if (foundUser) {
            dis(loginAction())
            dis(getUserDataAction(foundUser))
            alert("Login successfully completed")
            nav("/profile")
          }else{
            alert("Email or password is wrong")
          }
        }
      })
  }

  return (
    <section id='login'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-xl-7 col-lg-7 col-sm-11 contact-form">
            <form onSubmit={loginUser} >

              <label htmlFor="">Email:</label>

              <input type="email" id='useremail' name='useremail'
                placeholder='Your email address ....' required onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
              <br />

              <label htmlFor="">Password:</label>
              <input type="password" placeholder='Your Password ....' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
              <button type="submit" id='submit' >Sign In</button>
              <br />
            </form>
            <div className="register">
              <Link to="/register">Register</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Login