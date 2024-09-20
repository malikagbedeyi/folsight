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

const AuditRoomBody = () => {
        const navigate =  useNavigate()
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
                        <h1>Audit Room</h1>
                        <p>Audit room supports both internal and external audits end-to-end, including annual internal audit planning. It enables auditors and auditees to manage information requests and evidence collection with controlled access. Results of control tests are presented through customizable dashboards, exportable to PowerPoint, Word, and PDF. Additionally, audit metrics and analytics, such as control failures, can be exported to Excel for further analysis...</p>
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
                <h1>Conduct audits efficiently with minimal disruptions and streamlined workflows.</h1>
            </div>
            <div className="row auditMiddleContainer">
                <div className="col-lg-4 col-md-6 auditMiddleParent">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img13} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Automated Alerting</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p> Folsight sends automated, customizable alerts for upcoming audits, ensuring timely notifications for better planning, resource allocation, and preventing missed deadlines.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditMiddleParent">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img14} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Auto Updating</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p> Folsight automatically updates audit statuses, from not started to completed, ensuring real-time tracking of audit progress and expenses for efficient management.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditMiddleParent">
                    <div className="auditMiddleChild">
                    <div className="auditMiddleChildTop">
                        <img src={img15} alt="" />
                    </div>
                    <div className="auditMiddleChildmiddle">
                        <div className="auditMiddleChildmiddleTOp">
                        <h1>Secured Audit Plan</h1>
                        </div>
                        <div className="auditMiddleChildButtom">
                            <p> Folsight locks audit plans, allowing only authorized administrators to make changes, preserving integrity with customizable role-based permissions for users and admins.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="auditNews">
                <div className="auditNewsTittle">
                    <h1>Key Features of AuditRoom</h1>
                </div>
                <div className="container-fluid">
                <div className=" auditNewsContainer">
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent" >
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Audit Planning</h1>
                            <p>Audit planning is simplified with easy collaboration and budgeting tools, allowing teams to plan audits, allocate budgets, and categorize requests into accepted or rejected lists. Folsight provides alerts two months before audits to ensure preparedness.</p>
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
                            <h1>Audit Engagement</h1>
                            <p>The Audit Engagement feature allows you to map engagements to planned audits, ensuring alignment with audit strategies. When creating an audit, you can link it to the audit plan and specify whether it's recurring.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Information Request</h1>
                            <p>Leverage the AI-enabled feature to automatically generate information requests based on the audit scope, predefined templates, or historical data, ensuring that relevant information is efficiently collected from stakeholders.</p>
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
                        <h1> Workpapers</h1>
                        <p>Digitize and centralize all your audit documentation to create a single source of truth. With Folsight AuditRoom, you can easily manage, annotate, and link workpapers, ensuring that every piece of evidence is securely stored and readily available.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                             <h1>Audit Tasks</h1>
                             <p>Optimize the audit workflow with a structured task management system that clearly defines responsibilities, timelines, and deliverables. AuditRoom allows you to assign tasks to specific team members, set priorities, and monitor progress in real time.</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-6 auditKeyParent" data-aos="zoom-in">
                            <div className="auditKeyChild" >
                            <img src={img12} style={{float:"right"}} alt="" />
                            </div>
                            </div>
                    </div>
                    <div className="row auditKeyContainer">
                        <div className="col-lg-6 auditKeyParent" data-aos="zoom-out">
                            <div className="auditKeyChild">
                                   <img src={img11} style={{float:"left"}} alt="" />
                            </div>
                            
                         </div>
                         <div className="col-lg-6 auditKeyParent">
                            <div className="auditKeyChild">
                                <div className="auditKeyChildText">
                            <h1>Audit Report</h1>
                            <p>Produce detailed, professional audit reports with ease using our customizable templates and reporting tools. Capture key findings, insights, and recommendations, and present them in a clear, concise format that meets the needs of all stakeholders.</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="auditBenefit">
                <div className="auditBenefitTittle">
                    <h1>Benefits of Using AuditRoom</h1>
                </div>
                <div className="row auditBenefitCoontainer">
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="flip-right">
                        <div className="auditBenefitChild">
                            <img src={img4} alt="" />
                            <div className="bodyText">
                            <h1>Increased Efficiency</h1>
                            <p>Reduce audit time and effort with automated workflows and centralized resources.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="zoom-in">
                        <div className="auditBenefitChild">
                            <img src={img5} alt="" />
                            <div className="bodyText"> 
                                 <h1>Improved Compliance</h1>
                            <p>Ensure adherence to regulatory standards with robust security and data management.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 auditBenefitParent" data-aos="flip-left">
                        <div className="auditBenefitChild">
                            <img src={img6} alt="" />
                            <div className="bodyText"> 
                                 <h1>Data-Driven Insights</h1>
                            <p> Leverage powerful analytics to identify risks, trends, and areas for improvement.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="auditImage" data-aos="flip-right">
                <div className="imgcover">
                <img src={img3} alt=""  />
                </div>
            </div>
            <div className="auditBottom">
            <button onClick={() => navigate('/request-demo')} >Request a Demo</button>
            </div>

    </div>
  )
}

export default AuditRoomBody
