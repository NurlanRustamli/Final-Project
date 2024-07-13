import React, { useState } from 'react'
import "../../../index.css"
import { Link, useNavigate } from 'react-router-dom';
import { usersApi } from '../../../services/base';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../redux/actions/login.actions';
import { getUserDataAction } from '../../../redux/actions/userdata.actions';
import scroolToTop from '../../../provider/scroolToTop';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function Login() {
  // const islogin = localStorage.getItem("isLogin")
  const [eyeData, setEyeData] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ""
  })
  const nav = useNavigate()
  // const { isLogin } = useSelector()
  const dis = useDispatch()
  const loginUser = (e) => {
    e.preventDefault();
    usersApi.loginUser()
      .then(res => {
        if (res.status === 200) {
          let foundUser = res.data.find(user => user.email === loginData.email && user.password === loginData.password)
          if (foundUser) {
            dis(loginAction())
            dis(getUserDataAction(foundUser))
            alert("Login successfully completed")
            nav("/profile")
            // localStorage.setItem("LoginInfo", JSON.stringify(foundUser))
            // localStorage.setItem("isLogin", isLogin)
          } else {
            alert("Email or password is wrong")
          }
        }
      })
  }

  return (
    <section id='login'>
      <div className="container">
        <div className="row">
          <div className="login-header">
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </div>

        </div>
        <div className="row justify-content-between">

          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-8 login-form contact-form">
            <form onSubmit={loginUser} >
              <div style={{ width: "100%" }}>
                <label htmlFor="">Email:</label>

                <input type="email" id='useremail' name='useremail'
                  placeholder='Your email address ....' required onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                <br />
              </div>

              <div style={{ width: "100%" }}  >
                <label htmlFor="">Password:</label>
                <br />
                <div id='password'>
                  <input type={eyeData ? "password" : "text"} placeholder='Your Password ....' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                  {eyeData ?
                    <div id='eye' onClick={() => setEyeData(false)}><FaRegEye /></div> :
                    <div id='eye' onClick={() => setEyeData(true)}><FaRegEyeSlash /></div>

                  }
                </div>


              </div>

              <div className="sign d-flex justify-content-between align-items-center">
                <div className="register" onClick={scroolToTop()}>
                  <Link to="/register">Register</Link>
                </div>
                <button type="submit" id='submit' >Sign In</button>

              </div>
              <br />
            </form>



          </div>

          <div className="col-lg-5 col-xl-5 col-md-6 col-sm-6 d-flex" style={{ marginTop: "5rem", minHeight: "35px" }}>
            <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/common/login.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login