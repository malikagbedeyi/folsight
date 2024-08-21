import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../SignInForm';
const SignIn = () => {

return (
    <div className="">
        <Navbar />
        <SignInForm />
        <Footer />
    </div>
  )
}
export default SignIn
