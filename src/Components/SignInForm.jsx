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
                    <div class="basic-sign-inParent col-lg-8 col-md-12 col-sm-12 ">
                        <div class="basic-sign-in">
                            {/* <div className="basicLogin-top"> */}
                            <h3 class="mb-20">Register</h3>
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
                                <input id="pass" type="email" placeholder="Your Email" />
                                <label for="pass">Phone No <span>**</span></label>
                                <input id="pass" type="text" placeholder="******" />
                                <label for="name">Password  <span>**</span></label>
                                <input id="name" type="password" placeholder="Your Name" />
                                </div>
                                <a href='#/' className="login-btn w-100">Sign Up</a>
                                <div className="signUp text-center mt-30">
                                <span>Already have an Account?</span>
                                <a href='#/login'  className="login-text-btn">Login</a>
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
