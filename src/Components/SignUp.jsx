import React, { useState } from 'react'
import '../assets/scss/signup.scss'
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const SignUp = () => {

  const navigate =  useNavigate()
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setCaptchaValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      // Proceed with form submission
      console.log('Form submitted successfully');
      // Implement form submission logic here (e.g., POST request to your backend)
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  };
  return (
    <div className='sign-up'>
       <div className="row sign-up-container">
        <div className="col-lg-6 sign-up-Parent">
            <div className="sign-upChild-cover-bg">
            </div>
          </div>
        <div className="col-lg-6 sign-up-Parent">
            <div className="sign-upChild">
            <div className="commentContainer">
             <form action=""  onSubmit={handleSubmit}>
                <div className="formwrapper">
                <div className="leftForm">
                <label htmlFor="">Your name*</label>
                <input type="name" required />
                </div>
                <div className="rightForm">
                <label htmlFor="">Your email*</label>
                <input type="email" required />
                 </div>
                 <div className="leftForm">
                 <label htmlFor="">Phone No*</label>
                 <input type="name" required />
                 </div>
                 <div className="rightForm">
                 <label htmlFor="">Business Email*</label>
                 <input type="email" required />
                 </div>
                 </div>
                 <ReCAPTCHA
                      sitekey="6LfP1ygqAAAAAEJS_LVg4H2FzOtQ79ReEJ_uesDS"
                      onChange={handleCaptchaChange}
                    /><br />
                 <label htmlFor="">Your Comment*</label>
                 <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
                 <button  onClick={() => navigate('/')}>Post Comment</button>
            </form>
        </div>
              {/* <form action="">
                <label htmlFor="">FirstName:</label>
                <input type="text" name='firstName'
                 placeholder='Input Your First Name'
                 value={firstName}
                 onChange={e => setFirstName(e.target.value)}
                 />
                  <label htmlFor="">LastName:</label>
                <input type="text" name='lastName'
                 placeholder='Input Your Last Name'
                 value={lastName}
                 onChange={e => setLastName(e.target.value)}
                 />
                  <label htmlFor="">Email Address:</label>
                <input type="email" name='email'
                 placeholder='Input Your Email Address'
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 />
                  <label htmlFor="">Phone No:</label>
                <input type="text" name='phone'
                 placeholder='Input Your Phone No'
                 value={phone}
                 onChange={e => setPhone(e.target.value)}
                 />
                  <label htmlFor="">Password</label>
                <input type="password" name='password'
                 placeholder='Input Your Password'
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 />
                  <label htmlFor="">Confirm Password</label>
                <input type="password" name='confirm'
                 placeholder='Confirm Your Password'
                 value={confirm}
                 onChange={e => setConfirm(e.target.value)}
                 />
               <button onClick={() => navigate('/')}> <span>Sign In</span> <i className="fa-solid fa-right-to-bracket"></i></button>
                  <p> <span>Already have an account</span>? <a href="/login">LogIn</a> </p>
              </form> */}
            </div>
          </div>
          </div>
      </div>
  )
}

export default SignUp
