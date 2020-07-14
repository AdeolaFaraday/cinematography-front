import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {createMessage} from '../auth';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
    error: false,
    success: false
  })

  const {
    name,
    subject,
    email,
    message,
    error,
    success
  } = values

  const handleChange = name => event => {
    const value = event.target.value

    setValues({...values, [name]: value, error: '', success: ''})
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    createMessage({name, subject, email, message}).then((data) => {
        if(data.err){
          setValues({...values, error: true})
        } else {
          setValues({...values, success: true, name: '', email: '', subject: '', message: ''})
        }
    })
  }

  const showError = () => (
    error && (<div className="alert alert-danger"><h5>Fields must be unique.</h5></div>)
  )

  const showSuccess = () => (
    success && (<div className="alert alert-success"><h5>Message sents.</h5></div>)
  )

return (
<section class="contact-area section-gap" id="contact">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="menu-content pb-30 col-lg-8">
        <div class="title text-center">
          <h1 class="mb-10 header-fonts link-color">Get in touch</h1>
        </div>
      </div>
    </div>
    <form class="form-area mt-60" id="myForm" class="contact-form text-right" onSubmit={clickSubmit}>
      <div class="row">
      <div class="col-lg-6 form-group">
        <input name="name" placeholder="Enter your name" onChange={handleChange("name")} value={name} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text" />

        <input name="email" placeholder="Enter email address" onChange={handleChange("email")} value={email} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email" />

        <input name="subject" placeholder="Enter your subject" onChange={handleChange("subject")} value={subject} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your subject'" class="common-input mb-20 form-control" required="" type="text" />
      </div>
      <div class="col-lg-6 form-group">
        <textarea class="common-textarea mt-10 form-control" onChange={handleChange("message")} value={message} placeholder="Messege"  required=""></textarea>
        {showError()}
        {showSuccess()}
        <button class="primary-btn mt-20">Send Message<span class="lnr lnr-arrow-right"></span></button>
        <div class="mt-10 alert-msg">
      </div>
      </div>
      </div>
    </form>

  </div>
</section>
  );
}

export default Contact;
