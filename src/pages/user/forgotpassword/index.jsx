
import React, { useState } from 'react'
import "../../../index.css"
import { Link, useNavigate } from 'react-router-dom';
import { usersApi } from '../../../services/base';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../redux/actions/login.actions';
import { getUserDataAction } from '../../../redux/actions/userdata.actions';
import scroolToTop from '../../../provider/scroolToTop';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [eyeData, setEyeData] = useState(false)
    const nav = useNavigate()
    const dis = useDispatch()

    
    const forgotPassword = async (e) => {
        e.preventDefault();
        try {
            const user = await usersApi.getUser(email);
            if (user) {
                await usersApi.refreshPassword(user, newPassword);
                alert('Password has been reset successfully');
                nav('/login');
            } else {
                alert('This email does not exist');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            alert('An error occurred while resetting the password');
        }
    };


    return (
        <section id='login'>
            <div className="container">
                <div className="row">
                    <div className="login-header">
                        <h1>Forgot Password</h1>
                        <p>Get access to your Orders, Wishlist and Recommendations.</p>
                    </div>

                </div>
                <div className="row justify-content-between">

                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-8 login-form contact-form">
                        <form onSubmit={forgotPassword} >
                            <div style={{ width: "100%" }}>
                                <label htmlFor="">Email:</label>

                                <input type="email" id='useremail' name='useremail'
                                    placeholder='Your email address ....' required onChange={(e) => setEmail(e.target.value)} />
                                <br />
                            </div>

                            <div style={{ width: "100%" }}  >
                                <label htmlFor="">New Password:</label>
                                <br />
                                <div id='password'>
                                    <input type={eyeData ? "password" : "text"} placeholder='Your Password ....' onChange={(e) => setNewPassword(e.target.value)} />
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

export default ForgotPassword