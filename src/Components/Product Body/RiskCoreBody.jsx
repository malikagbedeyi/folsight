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
import { Link, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import MainBody from '../MainBody'

const RiskCoreBody = () => {
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
            <div className="col-lg-6 auditParent" >
                <div className="auditChildLeft">
                    <h1>Risk core</h1>
                    <p>At Riskcore, we specialize in delivering comprehensive project risk management solutions that empower organizations to navigate uncertainties with confidence. Leveraging our proprietary Riscor® methodology, we provide both qualitative and quantitative risk assessments, incorporating advanced simulations like Monte Carlo to forecast potential impacts on costs and schedules.</p>
                    <p className='textDisplay'>Audit room supports both internal and external audits end-to-end, including annual internal audit planning. It enables auditors and auditees to manage information requests and evidence collection with controlled access.</p>
                    <button>Request Demo</button>
                </div>
            </div>
            <div className="col-lg-6 auditParent" >
                <div className="auditChildRight">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
        <div className="row auditContainer-2">
        <div className="col-lg-6 auditParent" >
                <div className="auditChildRight">
                    <img src={img14} alt="" />
                </div>
            </div>
            <div className="col-lg-6 auditParent" >
                <div className="auditChildLeft">
                    <h1>Risk core</h1>
                    <p>At Riskcore, we deliver expert project risk management solutions, enabling organizations to handle uncertainty. Our Riscor® methodology provides qualitative and quantitative risk assessments, using Monte Carlo simulations to forecast cost and schedule impacts.</p>
                    <button>Request Demo</button>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="partherShip">
    <MainBody />
    </div> */}
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
                        <h1>Comprehensive Risk Assessment</h1>
                        <p> Riskcore offers an extensive evaluation of potential risks from every angle, combining both qualitative insights—such as expert opinions and stakeholder feedback—with quantitative data models.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent">
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
                        <h1> Proprietary Riscor® Methodology</h1>
                        <p>The Riscor® methodology is a proprietary framework developed specifically for risk management in complex projects. It incorporates advanced techniques like scenario analysis and Monte Carlo simulations to predict how various risks could impact project timelines, costs, and outcomes. </p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Tailored Solutions</h1>
                        <p>Every project has unique risk factors, and Riskcore recognizes that a one-size-fits-all approach won’t suffice. Riskcore customizes its risk management strategies to suit the industry, scope, and specific needs of each client. </p>
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
                    <h1>Proactive Risk Mitigation</h1>
                    <p>Rather than reacting to risks as they arise, Riskcore employs proactive strategies to identify and manage risks early in the project lifecycle. Through continuous monitoring, early warning systems, and predictive analytics.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                         <h1> Data-Driven Insights</h1>
                         <p> Riskcore’s use of advanced analytics and reporting tools enables organizations to make informed decisions based on real-time data. By leveraging these insights, organizations can better understand the probability and impact of potential risks, prioritize risk mitigation efforts, and adjust project plans accordingly.</p>
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
                        <h1>Workshops and Training</h1>
                        <p>Riskcore offers specialized workshops and training sessions designed to strengthen the skills of project teams in risk identification, management, and mitigation.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="auditNews-2">
            <div className="auditNewsTittle">
                <h1>Key Features of AuditRoom</h1>
            </div>
            <div className="container-fluid">
            <div className=" auditNewsContainer">
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent" >
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1>Comprehensive Risk Assessment</h1>
                        <p> Combines qualitative and quantitative approaches to evaluate risks from multiple perspectives, ensuring thorough risk analysis for better decision-making.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="fade-left">
                        <div className="auditKeyChild">
                        <img src={img10}  alt=""  />
                        </div>
                        
                        </div>
                </div>
                <div className="row auditKeyContainer">
                     <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText"> 
                        <h1> Proprietary Riscor® Methodology</h1>
                        <p>Uses advanced techniques like Monte Carlo simulations to predict the impact of risks on project timelines, costs, and outcomes with precision. </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="fade-right">
                        <div className="auditKeyChild" >
                               <img src={img11}  alt="" />
                        </div>
                        
                     </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                        <h1>Tailored Solutions</h1>
                        <p>Adapts risk management strategies to the specific needs and industry of each client, offering flexible, customized solutions for different projects.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-left">
                        <div className="auditKeyChild">
                               <img src={img12} alt="" />
                        </div>
                        
                     </div>
                </div>
                <div className="row auditKeyContainer">
                <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                    <h1> Proactive Risk Mitigation</h1>
                    <p> Identifies and addresses risks early with continuous monitoring, reducing delays and cost overruns by tackling issues before they escalate.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="slide-right">
                        <div className="auditKeyChild">
                               <img src={img10}  alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="row auditKeyContainer">
                    <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                         <h1>Data-Driven Insights</h1>
                         <p> Provides real-time analytics and reports to inform decisions, prioritize mitigation efforts, and enhance project transparency and control.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="zoom-in">
                        <div className="auditKeyChild" >
                        <img src={img12}  alt="" />
                        </div>
                        </div>
                </div>
                <div className="row auditKeyContainer">
                <div className="col-lg-6 auditKeyParent">
                        <div className="auditKeyChild">
                            <div className="auditKeyChildText">
                        <h1> Workshops and Training</h1>
                        <p>Delivers specialized sessions to empower project teams with practical risk management tools, fostering a culture of risk awareness and readiness.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-6 auditKeyParent" data-aos="zoom-out">
                        <div className="auditKeyChild">
                               <img src={img11}alt="" />
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
                <div className="col-lg-4 col-md-6 auditBenefitParent" >
                    <div className="auditBenefitChild">
                        <img src={img4} alt="" />
                        <div className="bodyText">
                        <h1>Increased Efficiency</h1>
                        <p>Reduce audit time and effort with automated workflows and centralized resources.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditBenefitParent" >
                    <div className="auditBenefitChild">
                        <img src={img5} alt="" />
                        <div className="bodyText"> 
                             <h1>Improved Compliance</h1>
                        <p>Ensure adherence to regulatory standards with robust security and data management.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 auditBenefitParent">
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
        <div className="auditImage" >
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

export default RiskCoreBody