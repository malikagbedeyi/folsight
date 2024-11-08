import React from 'react'
import img1 from "../assets/Images/shape2.png"
import img2 from "../assets/Images/shape3.png" 
import img3 from "../assets/Images/shape-sq.png"
import img4 from "../assets/Images/shape-c-2.png"
import '../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'
const CoverContact = () => {
  return (
    <div>
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
                    <h1>Contact Us</h1>
                    <p>At Folsight, we’re here to support you with any questions or security needs. Whether you’re looking to strengthen your organization’s defenses, inquire about our services, or get immediate assistance, our team is ready to help.</p>
                </div>
            </div>
            <div className="coverTopbarParentLeft col-lg-7">
                <div className="coverTopbarChildLeft">
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CoverContact
