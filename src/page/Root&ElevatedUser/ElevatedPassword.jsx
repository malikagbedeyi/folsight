import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/elevatedLogin.scss'
import Img1 from '../../assets/Images/DashLogo.png'
import { Link } from 'react-router-dom';
const ElevatedPassword = () => {
  const [email,setEmail] = useState('')
  const [hidepop,setHidepop] = useState(false)
  const handlePop =() => {
    setHidepop(!hidepop)
  }

  return (
    <div className='elevatedLogin'>
      <div className="loginContainer">
        <div className="loginParent row">
          <div className="loginChild col-lg-8 col-md-8 col-sm-8">
          <h2>Forgot Password</h2>
            <h6>Enter Your registered email to receive the recovery code</h6>
            <form className="loginForm">
              <input
              type="email" 
              placeholder='Enter your Email'
              onChange={(e)=>setEmail(e.target.value)}
              style={{marginBottom:"20px"}}
              />
              <button onClick={handlePop}>Request</button>
              <p>Remember password? <a href="#/elevatedLogin">Login</a></p>
            </form>
          </div>
          <div className="loginLogo col-lg-4 col-md-4 col-sm-4">
            <img src={Img1} alt="" />
            <h1>Folsight</h1>
            </div>
        </div>
      </div>
      <div className={hidepop ? "pop" : "d-none"}>
        <div className="popmessageContainer">
      <div className="popmessage">
        <h1>Recovery code sent</h1>
        <p>The recovery code has been sent to your email. pick up and enter the code. Note this code wil be valid for 5 minutes</p>
        <div className="popwrapper">
        <Link className='leftboton Link'>Resend</Link>
        <Link className='Link' to="/forgotPassword">Ok, Enter Code</Link>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ElevatedPassword
