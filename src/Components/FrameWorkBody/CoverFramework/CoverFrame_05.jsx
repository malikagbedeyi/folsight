import React from 'react'
import img1 from "../../../assets/Images/shape2.png"
import img2 from "../../../assets/Images/shape3.png" 
import img3 from "../../../assets/Images/shape-sq.png"
import img4 from "../../../assets/Images/shape-c-2.png"
import img5 from '../../../assets/Images/Icons1-2/8.png'
import '../../../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'
import FrameWorkForm from '../../../page/FrameWork/FrameWorkForm'
const CoverFrame_05 = () => {
  return (
    <div className="coverPage"  style={{ backgroundImage: `url(${require('../../../assets/Images/ImageBlog/02.jpg')})` }}>
        <div className="coverIndex"></div>
    <div class="shape-slider">
                <img class="shape shape-2  " src={img1} alt="" />
                <img class="shape shape-4 " src={img2} alt="" />
                <img class="shape shape-5 " src={img3} alt="" />
                <img class="shape shape-6 " src={img4}  alt="" />
            </div>
        <div className="coverTopbarContainer row">
            <div className="coverTopbarParent col-lg-5">
                <div className="coverTopbarChild">
                    <h1>NIST</h1>
                    <div className="border-line"></div>
                    <p>provides cybersecurity standards and guidelines. Its Cybersecurity Framework helps organizations assess and improve their ability to prevent, detect, and respond to cyber threats.</p>
                </div>
            </div>
            <div className="coverTopbarParentLeft col-lg-7">
                <div className="coverTopbarChildLeft ">
                 <FrameWorkForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoverFrame_05
