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
              <div className="icon"><MdAlternateEmail /></div>
              <h3>Email</h3>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className="contact-box">
              <div className="icon"><FaLocationCrosshairs /></div>
              <h3>Location</h3>
              <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-12">
            <div className="contact-box">
              <div className="icon"><MdOutlinePhoneAndroid /></div>
              <h3>Phone Number</h3>
              <p>+9945050500</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 col-xl-7 col-lg-7 col-sm-11 contact-form">
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
              <button type="submit" id='submit' disabled={disabledInput}>Submit</button>
              <br />
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact