import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/scss/login.scss'

const LoginForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate =  useNavigate()
    return (
      // <div className='login'>
      //   <div className="row login-container">
      //   <div className="col-lg-12 login-Parent">
      //       <div className="loginChild">
      //         <form action="">
      //           <label htmlFor="">FirstName:</label>
      //           <input type="text" name='firstName'
      //            placeholder='Input Your First Name'
      //            value={firstName}
      //            onChange={e => setFirstName(e.target.value)}
      //            />
      //             <label htmlFor="">LastName:</label>
      //           <input type="text" name='lastName'
      //            placeholder='Input Your Last Name'
      //            value={lastName}
      //            onChange={e => setLastName(e.target.value)}
      //            />
      //             <label htmlFor="">Email Address:</label>
      //           <input type="email" name='email'
      //            placeholder='Input Your Email Address'
      //            value={email}
      //            onChange={e => setEmail(e.target.value)}
      //            />
      //             <label htmlFor="">Phone No:</label>
      //           <input type="text" name='phone'
      //            placeholder='Input Your Phone No'
      //            value={phone}
      //            onChange={e => setPhone(e.target.value)}
      //            />
      //             <label htmlFor="">Password</label>
      //           <input type="password" name='password'
      //            placeholder='Input Your Password'
      //            value={password}
      //            onChange={e => setPassword(e.target.value)}
      //            />
      //             <label htmlFor="">Confirm Password</label>
      //           <input type="password" name='confirm'
      //            placeholder='Confirm Your Password'
      //            value={confirm}
      //            onChange={e => setConfirm(e.target.value)}
      //            />
      //          <button onClick={() => navigate('/')}> <span>Sign In</span> <i className="fa-solid fa-right-to-bracket"></i></button>
      //             <p> <span>Already have an account</span>? <a href="/login">LogIn</a> </p>
      //         </form>
      //       </div>
      //     </div>
      //     </div>
      //   </div>
      <div className="Login">
            <div className='loginBody'>
      <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            {/* <div className="basicLogin-top"> */}
                            <h3 class="mb-20">Login</h3>
                            <p>Welcome! please Kindly enter your information<br/>
                            </p>
                            <div class="mb-30"></div>
                            {/* </div> */}
                            <form action="#">
                                <div className="input-action">
                                <label for="name">Email Address  <span>**</span></label>
                                <input id="name" type="text" placeholder="Your Email" />
                                <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="******" />
                                <label for="pass">confirm Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="******" />
                                </div>
                                <div className="login-action mb-20 fix">
                                    <div className="logrem">
                                        <span className='log-rem'>
                                        <input id="remember" type="checkbox" className='input'/>
                                        <label className='label' for="remember">Remember me!</label>
                                        </span>

                                        <div className="forgotlogin">
                                        {/* <span className="forget-login"> */}
                                        <a  href="#/login">Forget password?</a>
                                        {/* </span> */}
                                    </div>
                                    </div>
                                </div>
                                <a href='#/' className="login-btn w-100">Login Now</a>
                                <div className="signUp text-center mt-30">
                                    <span>New User?</span>
                                    <a href='#/'   className="login-text-btn">Register Now</a>
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

export default LoginForm
