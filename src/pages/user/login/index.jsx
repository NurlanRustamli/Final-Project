import React from 'react'
import "../../../index.css"
import { Link } from 'react-router-dom';

function Login() {
const loginUser =(e)=>{
e.preventDefault();
}

  return (
    <section id='login'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-xl-7 col-lg-7 col-sm-11 contact-form">
            <form onSubmit={loginUser} >

              <label htmlFor="">Email:</label>

              <input type="email" id='useremail' name='useremail'
                placeholder='Your email address ....' required  />
              <br />

              <label htmlFor="">Password:</label>
              <input type="password" placeholder='Your Password ....'/>
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