import React from 'react'
import img1 from "../../assets/Images/shape2.png"
import img2 from "../../assets/Images/shape3.png" 
import img3 from "../../assets/Images/shape-sq.png"
import img4 from "../../assets/Images/shape-c-2.png"
import img5 from '../../assets/Images/Icons1-2/5.png'
import '../../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'
import FrameWorkForm from '../../page/FrameWork/FrameWorkForm'

const CoverTeam = () => {
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
                        <h1>Team</h1>
                        <p> Meet Our Team At Folsight, our team is the backbone of our commitment to protecting your assets and information. With years of expertise across cybersecurity, compliance, and risk management, our professionals are dedicated to anticipating and addressing today’s most complex security challenges. From initial assessments to proactive monitoring, our team is here to protect what matters most to you, 24/7.</p>
                    </div>
                </div>
                <div className="coverTopbarParentLeft col-lg-7">
                    <div className="coverTopbarChildLeft">
                        <FrameWorkForm />
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default CoverTeam


