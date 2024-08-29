import React from 'react'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_01_Body from '../../FrameWorkBody/FrameWork_01_Body'
import TOpbar from '../../Topbar';
import CoverFrame_01 from '../../FrameWorkBody/CoverFramework/CoverFrame_01';
import FrameWorkForm from './FrameWorkForm';
import Navbar from '../../Navbar';

const FrameWork01 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <Navbar />
      <CoverFrame_01 />
      <FrameWorkForm />
      <FrameWork_01_Body />
      <Footer />
    </div>
  )
}

export default FrameWork01
