import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img6 from "../../assets/Images/gea-01.png"
import img7 from "../../assets/Images/gea-02.png"
import img8 from "../../assets/Images/gea-03.png"
import img9 from "../../assets/Images/fea-4.png"
import img10 from "../../assets/Images/fea-41.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const FrameWork_01_Body = () => {
  useEffect(() => {
    AOS.init({initClassName: true})
},[])
  return (
    <div className='frameworkBody'>
      <div className="container">
      <div className="learnMore">
    <div className="container">
      <div className="learnMoreTittle row">
       <div className="col-lg-12">
    <h1>Making Great Things Possible</h1>
    <p>Land from day very fill that midst stars one dominion. Itself was let that divided itself god don't subdue wherein let behold over he whose of sea moved called.</p>
    </div>
            </div>  
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>

                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Powered by Intellect Driven by Values</h1>
                        <p>Kind waters day he green form you're had is first dry a place very second creepeth so place beginning whose replenish cattle him said created, unto seas moving them.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>
             </div>
             <div className="learnMoreCategoryContainer row">

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerChild">
                        <div className="learnMoreCategoryContainerChildTop">
                        <h1>Business Mechanisms to Accelerate Change</h1>
                        <p>Kind waters day he green form you're had is first dry a place very second creepeth so place beginning whose replenish cattle him said created, unto seas moving them.</p>
                        </div>
                        <div className="learnMoreCategoryContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreCategoryContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>

                <div className="learnMoreCategoryContainerParent col-lg-6">
                    <div className="learnMoreCategoryContainerFristChild" data-aos="fade-in-right" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img10} style={{width:"100%"}} alt="" />
                    </div>
                </div>
             </div>
             <div className="learnMoreProductContainer row">
                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerFristChild" data-aos="fade-in-left" data-aos-delay="500" data-aos-duration="1500">
                        <img src={img9} style={{width:"100%"}} alt="" />
                    </div>
                </div>

                <div className="learnMoreProductContainerParent col-lg-6">
                    <div className="learnMoreProductContainerChild">
                        <div className="learnMoreProductContainerChildTop">
                        <h1>Powered by Intellect Driven by Values</h1>
                        <p>Kind waters day he green form you're had is first dry a place very second creepeth so place beginning whose replenish cattle him said created, unto seas moving them.</p>
                        </div>
                        <div className="learnMoreProductContainerChildBody">
                            <ul>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                                <li>
                                <i className="fa-solid fa-square-check"></i>
                                <p> Together blessed own them to beginning own forth create</p>
                                </li>
                            </ul>
                        </div>
                        <div className="learnMoreProductContainerChildButtom" data-aos="fade-in-up" data-aos-delay="500" data-aos-duration="1500">
                            <button className=''>LEARN MORE</button>
                        </div>
                    </div>
                </div>
             </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default FrameWork_01_Body
