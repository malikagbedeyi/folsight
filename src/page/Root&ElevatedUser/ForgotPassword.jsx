import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/elevatedLogin.scss'
import Img1 from '../../assets/Images/DashLogo.png'
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [hidepop,setHidepop] = useState(false)
  const handlePop =() => {
    setHidepop(!hidepop)
  }
  const handleOtp = (e,index) => {
    const value = e.target.value

    if (/^\d?$/.test(value)){
      const newotpvalue = [...otpValues]
      newotpvalue[index] = value;
      setOtpValues(newotpvalue);

    if ( value && index < otpValues.length - 1){
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) nextInput.focus();
    }
  }
}
  return (
    <div className='elevatedLogin'>
      <div className="loginContainer">
        <div className="loginParent row">
          <div className="loginChild col-lg-8 col-md-8 col-sm-8">
          <h2>Forgot Password?</h2>
            <h6>Please Enter the Recovery OTP you received</h6>
            <form className="loginForm">
              <div className="otpContainer">
              {otpValues.map((otp, index) => (
              <div className="otpbox" key={index}>
                  <input
                   type="text"
                   id={`otp-${index}`}
                   className="input"
                   value={otp}
                   maxLength="1"
                   onChange={(e) => handleOtp(e, index)}/>
                </div>
              ))}
              </div>
              <button onClick={handlePop}>Request</button>
              <p>Remember password? <a href="">Resend</a></p>
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
        <h1>Authrisation Successful</h1>
        <p>Authrisation Successful. Click the botton below to reset your password</p>
        <Link className='Link' to="/confirmPassword">Reset password</Link>
      </div>
      </div>
      </div>
    </div>
  )
}


export default ForgotPassword
