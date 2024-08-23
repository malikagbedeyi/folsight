import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/scss/register.scss'

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate()
  
    return (
      <div className='sign-in'>
            <div className='signBody'>
      <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-sign-in">
                            {/* <div className="basicLogin-top"> */}
                            <h3 class="mb-20">Register From Here</h3>
                            <p>Welcome! Please confirm that your are visiting <br />
                             <a href="/">https://www.folisght.com</a>
                            </p>
                            <div class="mb-30"></div>
                            {/* </div> */}
                            <form action="#">
                                <div className="input-action">
                                  <div className="register-wrapper">
                                     <div className="leftwrapper">
                                <label for="name">First Name  <span>**</span></label>
                                <input id="name" type="text" placeholder="Your Name" />
                                </div>
                                 <div className="rightwrapper">
                                <label for="name">Last Name  <span>**</span></label>
                                <input id="name" type="text" placeholder="Your Name" />
                                </div>
                                </div>
                                <label for="pass">Email Address <span>**</span></label>
                                <input id="pass" type="email" placeholder="******" />
                                <label for="pass">Phone No <span>**</span></label>
                                <input id="pass" type="text" placeholder="******" />
                                <div className="register-wrapper">
                                     <div className="leftwrapper">
                                <label for="name">Password  <span>**</span></label>
                                <input id="name" type="password" placeholder="Your Name" />
                                </div>
                                 <div className="rightwrapper">
                                <label for="name">Confirm Password <span>**</span></label>
                                <input id="name" type="password" placeholder="Your Name" />
                                </div>
                                </div>
                                </div>
                                <div className="login-action mb-20 fix">
                                    <div className="logrem">
                                        <span className='log-rem'>
                                        <input id="remember" type="checkbox" className='input'/>
                                        <label className='label' for="remember">Remember me!</label>
                                        </span>

                                        <div className="forgotlogin">
                                        {/* <span className="forget-login"> */}
                                        <a  href="/login">Lost your password?</a>
                                        {/* </span> */}
                                    </div>
                                    </div>
                                </div>
                                <button className="login-btn w-100">Login Now</button>
                                <div className="signUp text-center mt-30">
                                    <span>New User?</span>
                                    <button className="login-text-btn">Register Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </div>
    )
  }

export default SignInForm
