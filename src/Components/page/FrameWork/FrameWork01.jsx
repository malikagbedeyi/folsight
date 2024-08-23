import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import '../../../assets/scss/FrameWork/framework_01.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrameWork_01_Body from '../../FrameWorkBody/FrameWork_01_Body';
import CoverPage from '../../CoverPage';
import TOpbar from '../../Topbar';

const FrameWork01 = () => {
  return (
    <div className='framework'>
      {/* <Navbar /> */}
      <TOpbar />
      <CoverPage />
      <FrameWork_01_Body />
      <Footer />
    </div>
  )
}

export default FrameWork01
