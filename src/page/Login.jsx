import React from 'react'
import Navbar from '../Components/Navbar'
    import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../Components/LoginForm';
import Footer from '../Components/Footer';
import CoverLogin from '../Components/CoverLogin';
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
