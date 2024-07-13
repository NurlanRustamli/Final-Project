import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersApi } from '../../../services/base'

let cloudApi = import.meta.env.VITE_CLOUD_API
let cloudName = import.meta.env.VITE_CLOUD_NAME
let cloudPreset = import.meta.env.VITE_CLOUD_PRESET

function Register() {
    const [file, setFile] = useState(null)
    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const nav = useNavigate()
    // const [userData, setUserData] = useState({
    //     fullName:"",
    //     email:"",
    //     password:"",
    //     avatar:""
    // })
    const registerUser = (e) => {
        e.preventDefault()
        const loginFormData = new FormData();
        loginFormData.append("file", file);
        loginFormData.append("upload_preset", cloudPreset)
        axios.post(`${cloudApi}/${cloudName}/upload`, loginFormData)
            .then(res => {
                console.log(res)
                usersApi.registerUser({
                    fullName: fullName.current.value,
                    email: email.current.value,
                    password: password.current.value,
                    avatar: res.data.url
                }).then(res => {
                    if (res.status === 201) {
                        alert("Qeydiyyat Tamamlandı")
                        fullName.current.value = ""
                        email.current.value = ""
                        password.current.value = ""
                        nav("/login")
                    } else {
                        alert(res.statusText)
                    }
                })
            })
    }

    return (
        <section id='login'>
            <div className="container">
                <div className="row">
                    <div className="login-header">
                        <h1>Register</h1>
                        <p>Get access to your Orders, Wishlist and Recommendations.</p>
                    </div>
                </div>

                <div className="row justify-content-between">

                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-8 login-form contact-form" style={{padding:"20px"}}>
                        <form onSubmit={registerUser} >
                            <label htmlFor="">Full Name:</label>

                            <input type="text" id='userFullName' name='useremail'
                                placeholder='Your full name ....' required ref={fullName} />
                            <br />
                            <label htmlFor="">Email:</label>

                            <input type="email" id='useremail' name='useremail'
                                placeholder='Your email address ....' required ref={email}/>
                            <br />

                            <label htmlFor="">Password:</label>
                            <input type="password" placeholder='Your Password ....' ref={password} />

                            <br />
                            <label htmlFor="">Avatar:</label>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <div className="sign d-flex justify-content-between align-items-center">
                                <div className="register">
                                    <Link to="/login">Login</Link>
                                </div>
                                <button type="submit" id='submit' >Sign In</button>

                            </div>

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

export default Register