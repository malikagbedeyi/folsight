import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../Components/SignInForm';
import CoverSignIn from '../Components/CoverSignIn';
import TOpbar from '../Components/Topbar';
const Register = () => {

return (
    <div className="">
        {/* <Navbar /> */}
        <TOpbar />
        <CoverSignIn />
        <SignInForm />
        <Footer />
    </div>
  )
}
export default Register 
