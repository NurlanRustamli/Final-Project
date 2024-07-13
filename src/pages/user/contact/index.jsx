import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { MdAlternateEmail, MdOutlinePhoneAndroid } from 'react-icons/md'

function Contact() {
  const [disabledInput, setDisabledInput] = useState(false)
  const form = useRef()
  const notfi = useRef()

  const sendMail = (e) => {
    e.preventDefault()
    setDisabledInput(true)
    emailjs.sendForm("service_6rkaate", "template_uovc5nr", form.current, "2ZHPWU0O87O6AkOdV")
      .then(res => {
        if (res.status === 200) {
          setDisabledInput(false)
          notfi.current.style.display = "block"
          // setNotification(true)

          setTimeout(() => notfi.current.style.display = "none", 1000)
          form.current.fullname.value = "";
          form.current.useremail.value = "";
          form.current.subject.value = "";
          form.current.description.value = "";

        }
      })
  }
  return (
    <section id='contact'>
      <div className="notification" ref={notfi}>
        Successful
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-heading">
            <h2>Contact Us</h2>
            <p>Hello,Pleease Contact Us!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className="contact-box">
              <div className="icon-out"><div className="icon"><MdAlternateEmail /></div></div>
              <div className="conheading">
                <h3>Email</h3>
                <p>example@gmail.com</p>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className="contact-box">
              <div className="icon-out"><div className="icon"><FaLocationCrosshairs /></div></div>
              <div className="conheading">
                <h3>Location</h3>
                <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className="contact-box">
              <div className="icon-out"><div className="icon"><MdOutlinePhoneAndroid /></div></div>
              <div className="conheading">
                <h3>Phone Number</h3>
                <p>+9945050500</p>
              </div>

            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-11 col-xl-6 col-lg-6 col-sm-11 maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24092.158981021585!2d45.596598239585155!3d40.991993159483144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4040da7d132705b7%3A0x1efe3978dbc139ec!2sTovuz!5e0!3m2!1saz!2saz!4v1720849255469!5m2!1saz!2saz" width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-md-11 col-xl-6 col-lg-6 col-sm-11 login-form contact-form">
            <form onSubmit={sendMail} ref={form}>
              <label htmlFor="">Full Name:</label>
              <input type="text" id='fullname' name='fullname'
                placeholder='Your Full name...' required disabled={disabledInput} />
              <br />
              <label htmlFor="">Email:</label>

              <input type="email" id='useremail' name='useremail'
                placeholder='Your email address ....' required disabled={disabledInput} />
              <br />
              <label htmlFor="">Subject:</label>
              <input type="text" id='subject' name='subject'
                placeholder='Enter Subject ....' required disabled={disabledInput} />
              <br />
              <label htmlFor="">Description:</label>
              <textarea id='description' name='description'
                placeholder='Enter Description ....' required disabled={disabledInput} />
              <br />
              <div className="submit-out">
              <button type="submit" id='submit' disabled={disabledInput}>Submit</button>

              </div>
              <br />
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact