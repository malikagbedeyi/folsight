import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../SignInForm';
import CoverSignIn from '../CoverSignIn';
const Register = () => {

return (
    <div className="">
        <Navbar />
        <CoverSignIn />
        <SignInForm />
        <Footer />
    </div>
  )
}
export default Register 
