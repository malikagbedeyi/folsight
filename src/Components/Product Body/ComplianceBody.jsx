import React, { useEffect } from 'react'
import img1 from '../../assets/Images/01Home.png'
import img2 from '../../assets/Images/auditi01.png'
import img3 from '../../assets/Images/p-mockup.png'
import img4 from '../../assets/Images/gea-01.png'
import img5 from '../../assets/Images/gea-02.png'
import img6 from '../../assets/Images/gea-03.png'
import img7 from '../../assets/Images/grc-01.png'
import img8 from '../../assets/Images/grc-02.png'
import img9 from '../../assets/Images/about-01.png'
import img10 from "../../assets/Images/fea-4.png"
import img11 from "../../assets/Images/fea-41.png"
import img12 from "../../assets/Images/fea-3.png"
import img13 from "../../assets/Images/ImageBlog/01.jpg"
import img14 from "../../assets/Images/ImageBlog/03.jpg"
import img15 from "../../assets/Images/ImageBlog/04.jpg"
import 'aos/dist/aos.css';
import AOS from 'aos';
import MainBody from '../MainBody'
import { Link, useNavigate } from 'react-router-dom';

const ComplianceBody = () => {
    const navigate =  useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in',
            once: true, 
          });
      }, []);
  return (
    <div className='auditRoom'>
        <div className="auditCover">
            <div className="row auditContainer">
                <div className="col-lg-6 auditParent" data-aos="zoom-out-left">
                    <div className="auditChildLeft">
                        <h1>Compl.Ai</h1>
                        <p>Folsight leverages cutting-edge Artificial Intelligence (AI) to enhance efficiency and accuracy while ensuring full compliance with industry standards and regulations. We understand the critical importance of regulatory compliance in today’s business landscape. Folsight is committed to helping organizations meet their compliance requirements with our AI-powered GRC tool.</p>
                        <button>Request Demo</button>
                    </div>
                </div>
                <div className="col-lg-6 auditParent" data-aos="zoom-out-right">
                    <div className="auditChildRight">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="auditImgContainer">
            <img src={img2} alt="" />
        </div> */}
        <div className="partherShip">
        <MainBody />
        </div>
        <div className="auditMiddle">
            <div className="auditMiddleTittle">
                <h1>AI-driven Compliance</h1>
                <p>Our AI technology enhances the ability to detect, assess, and mitigate risks in real time.</p>
            </div>
            <div className="row auditMiddleContainer">
                <div className="col-lg-4 col-md-6 auditMiddleParent" data-aos="slide-right">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img13} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Data Encryption</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p> All data is encrypted both in transit and at rest using advanced industry-standard encryption methods, </p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditMiddleParent" data-aos="zoom-out">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img14} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Automated Risk Assessment</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p>AI-powered analytics proactively identify potential risks early on and automatically assign severity ratings based on data analysis.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditMiddleParent" data-aos="zoom-in-left">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img15} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Continuous Monitoring</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p> Our platform continuously monitors compliance activities, automatically updating risk profiles in real time based on the latest data insights.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="auditNews">
                <div className="auditNewsTittle">
                    <h1>Key Features of Complance</h1>
                </div>
                <div className="container-fluid">
                <div className=" auditNewsContainer">
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent" >
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Gap Assessment</h1>
                            <p>Folsight automates data collection, reduces errors, and eliminates manual entry. It includes pre-built compliance frameworks, monitors compliance, identifies real-time gaps, and offers dashboards for prioritizing and addressing issues.</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-6 auditKeyParent" data-aos="fade-left" >
                            <div className="auditKeyChild">
                            <img src={img10} style={{float:"right"}} alt=""  />
                            </div>
                            
                            </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent" data-aos="fade-right">
                            <div className="auditKeyChild" >
                                   <img src={img11} style={{float:"left"}} alt="" />
                            </div>
                            
                         </div>
                         <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Framework/Standard</h1>
                            <p> Folsight includes pre-built compliance frameworks, such as ISO, GDPR, NIST, and many others, covering industry-specific and regulatory standards. It offers everything you need to easily align with multiple compliance requirements across various sectors.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Requirements</h1>
                            <p> Timely alerts for upcoming audits, policy reviews, or changes in regulations, ensuring that your organization stays on top of compliance obligations.</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-6 auditKeyParent" data-aos="slide-left">
                            <div className="auditKeyChild">
                                   <img src={img12} style={{float:"right"}} alt="" />
                            </div>
                            
                         </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent" data-aos="slide-right">
                            <div className="auditKeyChild">
                                   <img src={img10} style={{float:"left"}} alt="" />
                            </div>
                            
                        </div>
                        <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                        <h1> Controls</h1>
                        <p> Set up controls specific to your organization’s needs, ensuring compliance with both general and industry-specific regulations.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="auditBenefit">
                <div className="auditBenefitTittle">
                    <h1>Benefits of Using Compliance</h1>
                </div>
                <div className="row auditBenefitCoontainer">
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="flip-right">
                        <div className="auditBenefitChild">
                            <img src={img4} alt="" />
                            <div className="bodyText">
                            <h1> utomated Compliance Management</h1>
                            <p>AI-driven automation reduces manual tasks, such as data collection, gap analysis, and reporting, saving time and minimizing errors.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="zoom-in">
                        <div className="auditBenefitChild">
                            <img src={img5} alt="" />
                            <div className="bodyText"> 
                                 <h1>Real-Time Risk Detection</h1>
                                 <p>AI continuously monitors systems and processes, identifying compliance risks in real time, allowing for faster responses to potential issues.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="flip-left">
                        <div className="auditBenefitChild">
                            <img src={img6} alt="" />
                            <div className="bodyText"> 
                                 <h1>Continuous Monitoring</h1>
                            <p>AI operates around the clock, providing 24/7 compliance monitoring, ensuring that organizations stay compliant with changing regulations.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auditImage" data-aos="flip-right">
                <div className="imgcover">
                <img src={img3} alt=""  />
                </div>
                <div className="imgtop">
                <img src={img7} alt="" />
                </div>
                <div className="imgdown">
                <img src={img7} alt=""  />
                </div>
            </div>
            <div className="auditBottom">
            <button onClick={() => navigate('/request-demo')} >Request a Demo</button>
            </div>

    </div>
  )
}

export default ComplianceBody
