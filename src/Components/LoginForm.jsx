import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import'../assets/scss/login.scss'

const LoginForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigate =  useNavigate()
    return (
      <div className='login'>
        <div className="row login-container">
        <div className="col-lg-6 login-Parent">
            <div className="loginChild-cover-bg">
            </div>
          </div>
        <div className="col-lg-6 login-Parent">
            <div className="loginChild">
              <form action="">
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
              </form>
            </div>
          </div>
          </div>
        </div>
    )
  }

export default LoginForm
