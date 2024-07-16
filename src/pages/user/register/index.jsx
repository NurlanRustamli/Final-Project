import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersApi } from '../../../services/base'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

let cloudApi = import.meta.env.VITE_CLOUD_API
let cloudName = import.meta.env.VITE_CLOUD_NAME
let cloudPreset = import.meta.env.VITE_CLOUD_PRESET

function Register() {
    const [file, setFile] = useState(null)
    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const nav = useNavigate()
    const [eyeData, setEyeData] = useState(false)


    // const [userData, setUserData] = useState({
    //     fullName:"",
    //     email:"",
    //     password:"",
    //     avatar:""
    // })
    // const registerUser = async (e) => {
    //     e.preventDefault()
    //     const loginFormData = new FormData();
    //     loginFormData.append("file", file);
    //     loginFormData.append("upload_preset", cloudPreset)
    //     axios.post(`${cloudApi}/${cloudName}/upload`, loginFormData)
    //     const emailExists = await usersApi.checkEmail(email.current.value)
    //     console.log(emailExists)


    //         .then(res => {
    //             if (emailExists) {
    //                 alert("This mail has already registered")

    //             }else{
    //                 usersApi.registerUser({
    //                     fullName: fullName.current.value,
    //                     email: email.current.value,
    //                     password: password.current.value,
    //                     avatar: res.data.url
    //                 }).then(res => {
    //                     if (res.status === 201) {
    //                         alert("Qeydiyyat Tamamlandı")
    //                         fullName.current.value = ""
    //                         email.current.value = ""
    //                         password.current.value = ""
    //                         nav("/login")
    //                     } else {
    //                         alert(res.statusText)
    //                     }
    //                 })
    //             }   
    //         }
    //         )
    // }

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const loginFormData = new FormData();
            loginFormData.append("file", file);
            loginFormData.append("upload_preset", cloudPreset);

            const uploadResponse = await axios.post(`${cloudApi}/${cloudName}/upload`, loginFormData);
            console.log(uploadResponse)

            const emailExists = await usersApi.checkEmail(email.current.value);

            if (emailExists) {
                alert("This email has already been registered");
            } else {
                const registerResponse = await usersApi.registerUser({
                    fullName: fullName.current.value,
                    email: email.current.value,
                    password: password.current.value,
                    avatar: uploadResponse.data.url
                });

                if (registerResponse.status === 201) {
                    alert("Registration Completed");
                    fullName.current.value = "";
                    email.current.value = "";
                    password.current.value = "";
                    nav("/login");
                } else {
                    alert(registerResponse.statusText);
                }
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during registration. Please try again.");
        }
    };

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

                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-8 login-form contact-form" style={{ padding: "20px" }}>
                        <form onSubmit={registerUser} >

                            <div style={{ width: "100%" }}>
                                <label htmlFor="">Full Name:</label>

                                <input type="text" id='userFullName' name='useremail'
                                    placeholder='Your full name ....' required ref={fullName} />
                                <br />
                            </div>

                            <div style={{ width: "100%" }}>
                                <label htmlFor="">Email:</label>
                                <input type="email" id='useremail' name='useremail'
                                    placeholder='Your email address ....' required ref={email} />
                                <br />
                            </div>


                            <div id='password'style={{width:"100%"}}>
                                <label htmlFor="">Password:</label>
                                <br />
                                <div>
                                    <input type={eyeData ? "text" : "password"} placeholder='Your Password ....' onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                                    {eyeData ?
                                        <div id='regeye' onClick={() => setEyeData(false)}><FaRegEye /></div> :
                                        <div id='regeye' onClick={() => setEyeData(true)}><FaRegEyeSlash /></div>

                                    }
                                </div>

                            </div>

                            <br />
                            <div style={{ width: "100%" }}>
                                <label htmlFor="">Avatar:</label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </div>


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