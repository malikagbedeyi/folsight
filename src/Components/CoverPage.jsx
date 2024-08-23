import React from 'react'
import img1 from "../assets/Images/shape2.png"
import img2 from "../assets/Images/shape3.png" 
import img3 from "../assets/Images/shape-sq.png"
import img4 from "../assets/Images/shape-c-2.png"
import '../assets/scss/FrameWork/CoverFrameWork/coverPages.scss'
const CoverPage = () => {
  return (
    <div className="coverPage">
        <div className="coverIndex"></div>
    <div class="shape-slider">
                <img class="shape shape-2  " src={img1} alt="" />
                <img class="shape shape-4 " src={img2} alt="" />
                <img class="shape shape-5 " src={img3} alt="" />
                <img class="shape shape-6 " src={img4}  alt="" />
            </div>
        <div className="coverTopbarContainer container">
            <div className="coverTopbarParent">
                <div className="coverTopbarChild">
                    <h1>FrameWork</h1>
                    <p>Go fifth signs dry sea created greater</p>
                </div>
            </div>
            <div className="coverTopbarParentLeft">
                <div className="coverTopbarChildLeft">
                    <p>Home - <span>ISO27001</span> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoverPage
