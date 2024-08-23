import React from 'react'
import Navbar from '../Navbar'
    import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
import CoverLogin from '../CoverLogin';
const Login = () => {
    return (
        <div className="Login">
            <Navbar />
            <CoverLogin />
            <LoginForm />
            <Footer />
        </div>
      )
    }
export default Login
