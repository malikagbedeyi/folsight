import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/elevatedLogin.scss'
import Img1 from '../../assets/Images/DashLogo2.png'
import { FiEye, FiEyeOff } from "react-icons/fi";

const ElevatedLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className='elevatedLogin'>
      <div className="loginContainer">
        <div className="loginParent row">
          <div className="loginChild col-lg-8 col-md-8 col-sm-8">
          <h2>Welcome Back</h2>
            <h1>Login</h1>
            <p>only for Authorized Admin users</p>
            <form className="loginForm">
              <input 
              type="email" 
              placeholder='Email'
              onChange={(e)=>setEmail(e.target.value)}
              />
                <div className="password-input-wrapper">

               <input 
                    type={isPasswordVisible ? "password" :" text"}
                    id='password'
                    placeholder='Password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
              />
               <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="password-toggle-btn"
                >
                  {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              
              <a href="#/elevatedPassword" className="">forget Password?</a>
              <button><a href="#/elevatedPage">Login</a></button>
              <p>Don't have an account? <a href="#/elevatedBookCall">Contact Us</a></p>
            </form>
          </div>
          <div className="loginLogo col-lg-4 col-md-4 col-sm-4">
            <img src={Img1} alt="" />
            <h1>Folsight</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ElevatedLogin
