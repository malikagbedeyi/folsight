import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/elevatedLogin.scss'
import Img1 from '../../assets/Images/DashLogo.png'
import { Link } from 'react-router-dom';
const ConfirmPassword = () => {
  const [Password,setPassword] = useState('')
  const [confirmpassword,confirmPassword] = useState('')
  const [hidepop,setHidepop] = useState(false)
  const handlePop =() => {
    setHidepop(!hidepop)
  }
  return (
    <div className='elevatedLogin'>
      <div className="loginContainer">
        <div className="loginParent row">
          <div className="loginChild col-lg-8 col-md-8 col-sm-8">
          <h2>Reset Password</h2>
            <form className="loginForm">
            <input 
              type="password" 
              placeholder='enter New Password'
              onChange={(e)=>setPassword(e.target.value)}
              />
               <input 
              type="password" 
              placeholder='confirm New Password'
              onChange={(e)=>setPassword(e.target.value)}
              />
              <button onClick={handlePop}>Submit</button>
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
        <h1>Password Reset Successfull</h1>
        <p>Your password has been reset successfully. You can now login to your account</p>
        <Link className='Link' to="/elevatedLogin">Login</Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ConfirmPassword
