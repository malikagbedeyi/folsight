import React from 'react'
import Navbar from '../Navbar'
    import'../../assets/scss/signIn.scss'
    import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
const Login = () => {
    return (
        <div className="">
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
      )
    }
export default Login
