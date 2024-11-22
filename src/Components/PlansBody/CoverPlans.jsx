import React from 'react'
import img1 from "../../assets/Images/shape2.png"
import img2 from "../../assets/Images/shape3.png" 
import img3 from "../../assets/Images/shape-sq.png"
import img4 from "../../assets/Images/shape-c-2.png"
import img5 from '../../assets/Images/Icons1-2/5.png'
import '../../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'

const CoverPlans = () => {
    return (
        <div className="coverPage" style={{height:"90vh"}}>
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
                    <h1>Plans</h1>
                    <p>Choose from our tailored security plans designed to meet the unique needs of businesses of all sizes. Each plan offers a different level of protection, so you can find the right fit for your organization.</p>
                </div>
            </div>
            <div className="coverTopbarParentLeft col-lg-7">
                    <div className="coverTopbarChildLeft">
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default CoverPlans


