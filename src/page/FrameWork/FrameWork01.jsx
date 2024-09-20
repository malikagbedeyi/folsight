import React from 'react'
import Footer from '../../Components/Footer'
import '../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_01_Body from '../../Components/FrameWorkBody/FrameWork_01_Body'
import CoverFrame_01 from '../../Components/FrameWorkBody/CoverFramework/CoverFrame_01';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Components/Navbar';
import TOpbar from '../../Components/Topbar';

const FrameWork01 = () => {
  return (
    <div className='framework'>
      <TOpbar />
      {/* <Navbar /> */}
      <CoverFrame_01 />
      <FrameWorkForm />
      <FrameWork_01_Body />
      <Footer />
    </div>
  )
}

export default FrameWork01
