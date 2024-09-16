import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_04_Body from '../../Components/FrameWorkBody/FrameWork_04_Body'

import CoverFrame_04 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_04';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Components/Navbar';

const FrameWork04 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <Navbar />
      <CoverFrame_04 />
      <FrameWorkForm />
      <FrameWork_04_Body />
      <Footer />
    </div>
  )
}

export default FrameWork04
