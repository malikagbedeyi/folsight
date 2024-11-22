import React from 'react'
import img1 from "../../../assets/Images/shape2.png"
import img2 from "../../../assets/Images/shape3.png" 
import img3 from "../../../assets/Images/shape-sq.png"
import img4 from "../../../assets/Images/shape-c-2.png"
import img5 from '../../../assets/Images/Icons1-2/10.png'
import '../../../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'
import FrameWorkForm from '../../../page/FrameWork/FrameWorkForm'
const CoverFrame_06 = () => {
  return (
    <div className="coverPage">
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
                    <h1>PCI DSS</h1>
                    <div className="border-line"></div>
                    <p>is a global standard for securing credit card transactions. It applies to any entity that stores, processes, or transmits cardholder data, aiming to prevent data breaches.</p>
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

export default CoverFrame_06