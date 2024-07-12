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
        <section id='register'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-xl-7 col-lg-7 col-sm-11 contact-form">
                        <form onSubmit={registerUser} >
                            <label htmlFor="">Full Name:</label>

                            <input type="text" id='userFullName' name='useremail'
                                placeholder='Your full name ....' required ref={fullName} />
                            <br />
                            <label htmlFor="">Email:</label>

                            <input type="email" id='useremail' name='useremail'
                                placeholder='Your email address ....' required ref={email} />
                            <br />

                            <label htmlFor="">Password:</label>
                            <input type="password" placeholder='Your Password ....' ref={password} />

                            <br />
                            <label htmlFor="">Avatar:</label>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <button type="submit" id='submit' >Sign Up</button>

                        </form>
                        <div className="register">
                            <Link to="/login">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register