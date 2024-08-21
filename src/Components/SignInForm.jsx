import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate = useNavigate()
  
    return (
      <div className='sign-in'>
        <div className="container-cover"></div>
         <div className="row sign-in-container">
        {/* <div className="col-lg-6 sign-in-Parent">
            <div className="sign-inChild-cover-bg">
            </div>
          </div> */}
        <div className="col-lg-6 col-md-6 sign-in-Parent">
            <div className="sign-inChild">
              <form action="">
                  <label htmlFor="">Email Address:</label>
                <input type="email" name='email'
                 placeholder='Input Your Email Address'
                 value={email}
                 onChange={e => setEmail(e.target.value)}
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
                  <button onClick={() => navigate('/')}> <span>LogIn</span> <i className="fa-solid fa-right-to-bracket"></i></button>
                  <p> <span>Don't have an account</span>? <a href="/signIn">Sign In</a> </p>
              </form>
            </div>
          </div>
          </div>
        </div>
    )
  }

export default SignInForm
