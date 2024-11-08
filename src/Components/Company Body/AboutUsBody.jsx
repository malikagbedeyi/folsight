import React, { useEffect } from 'react'
import img6 from  '../../assets/Images//ImageBlog/03.jpg'
import img1 from "../../assets/Images/IconsCover1/icon_01.png"
import img2 from "../../assets/Images/IconsCover1/icon_02.png"
import img3 from "../../assets/Images/IconsCover1/icon_03.png"
import img4 from "../../assets/Images/IconsCover1/icon_04.png"
import img5 from "../../assets/Images/Icons1-5/4.png"
import 'aos/dist/aos.css';
import AOS from 'aos';
import {  useNavigate } from 'react-router-dom'

const AboutUsBody = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
        duration: 800, // Customize the duration of the animation
        easing: 'ease-in-out', // Customize the easing of the animation
        once: true, // Whether animation should happen only once
      });
  }, []);
  return (
    <div className='about-usBody'>
      <div className="about-us-topContainer">
        <div className="container-fluid">
          <div className="row aboutUs-bodyContainer">
            <div className="col-lg-6 col-md-12 aboutUs-bodyParent">
              <div className="aboutUs-bodyChild">
                <img src={img6} alt="" data-aos="slide-right" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aboutUs-bodyParent" data-aos="zoom-out-up">
              <div className="bodyChildright">
                <h1>About Folsight</h1>
                <p className='textNone'>Folsight is a premier global Trust Management Platform on a mission to restore confidence in web-based companies by helping them enhance and showcase their security. We are reshaping the IT Audit and Governance, Risk, and Compliance (GRC) landscape with a focus on empowering businesses through robust IT governance and comprehensive risk management. Folsight aims to revolutionize the risk profession, close vulnerability gaps, and elevate audit, risk, and compliance teams to a proactive role. </p>
                <p className='textNone-2'>Folsight is a premier global Trust Management Platform on a mission to restore confidence in web-based companies by helping them enhance and showcase their security. We are reshaping the IT Audit and Governance, Risk, and Compliance (GRC). </p>
                <button> <a href='#/request-demo'>Request a Demo</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-middleContainer">
          <div className="container">
          <div className="row aboutUs-middleBody">
          <div className="col-lg-4 col-md-6 aboutUs-middleParent" >
              <div className="aboutUs-middleChild">
                <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                </div>
                <h4>Who We Are</h4>
                <p>Folsight is a leading IT Audit and Governance, Risk, and Compliance (GRC) platform designed to help organizations navigate the intricate landscape of IT governance.</p>
                {/* By providing innovative, data-driven solutions, we enable businesses to operate securely and compliantly, minimizing risks and ensuring adherence to regulatory standards. */}
              </div>
              </div>
            <div className="col-lg-4 col-md-6 aboutUs-middleParent" >
              <div className="aboutUs-middleChild">
                <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
                </div>
                <h4>Our Mission</h4>
                <p> our mission is to empower organizations with the tools and insights needed to transform IT governance and risk management. Through our comprehensive suite of solutions. </p>
                {/* Internet safety has grown tremendously important, we realized how challenging it would be for companies with rapid expansion to dedicate the energy and time required to build a good security framework,we aim to enhance operational efficiency, elevate compliance standards, and foster a culture of proactive risk management. */}
             </div>
              </div>
              <div className="col-lg-4 col-md-6 aboutUs-middleParent" >
              <div className="aboutUs-middleChild activeChild">
                <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921H8v2h8v-2h-.774c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z"></path></svg>
                </div>
                <h4>Our Vision</h4>
                <p>We envision a future where businesses leverage advanced technology to drive success and innovation in a secure, compliant, and efficient manner. </p>
                {/* By fostering an environment of transparency and accountability, we strive to build a world where organizations can focus on achieving their strategic goals. Our vision has been consistent since our inception with the goal of integrating security monitoring for regulations such as SOC 2, HIPAA, and ISO 27001. */}
              </div>
              </div>
              </div>
             <button> <a href='#/register'>Join Folsight today</a></button>
            </div>
          </div>
          <div className="about-usBottom">
            <div className="Container">
            <div className="bottomTittle">
                    <h1>IT Audit Framework</h1>
                  </div>
              <div className="row aboutUs-bottomContainer">
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>01</p></div>
                    <div className="textbox">
                      <h3>Automated Audits</h3>
                      <p>Automate your audit processes with Folsight’s robust audit engine. Our platform streamlines the entire audit lifecycle, from planning and execution to reporting and follow-up, ensuring a thorough and efficient audit process.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>02</p></div>
                    <div className="textbox">
                      <h3>Risk Assessment & Management</h3>
                      <p>Conduct comprehensive risk assessments to identify vulnerabilities in your IT infrastructure. Our risk management tools help prioritizes risks, enabling you to implement effective mitigation strategies.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>03</p></div>
                    <div className="textbox">
                      <h3>Compliance Tracking</h3>
                      <p>Stay ahead of regulatory changes with real-time compliance monitoring. Folsight’s compliance tracking features ensure that your organization remains compliant with industry standards such as ISO, NIST, GDPR, and more.</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-lg-6 aboutUs-bottomParentright">
                  <div className="aboutUs-bottomChildright">
                    <div className="bottomImg">
                    </div>
                    {/* <div className="bottomImgbox">
                      <div className="boxImgWrapper">
                      <div className="leftbox">
                        <h2>20 +</h2>
                        <span>years of experience</span>
                      </div>
                      <div className="rightbox"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-usBottom">
            <div className="Container">
            <div className="bottomTittle-2">
                    <h1>Integrated GRC Management</h1>
                  </div>
              <div className="row aboutUs-bottomContainer">
              <div className="col-lg-6 aboutUs-bottomParentright">
                  <div className="aboutUs-bottomChildright">
                    <div className="bottomImg">
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox bottomboxchildright">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>01</p></div>
                    <div className="textbox">
                      <h3>Policy Management</h3>
                      <p>Develop, implement, and monitor policies across your organization with ease. Folsight provides a centralized platform for policy management, ensuring consistency and compliance.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox bottomboxchildright">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>02</p></div>
                    <div className="textbox">
                      <h3>Incident Management</h3>
                      <p> Respond to incidents quickly and effectively with Folsight’s incident management tools. Track and manage incidents in real-time, reducing downtime and minimizing the impact on your operations.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox bottomboxchildright">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>03</p></div>
                    <div className="textbox">
                      <h3>Vendor Risk Management</h3>
                      <p>Evaluate and manage risks associated with third-party vendors. Folsight’s vendor risk management tools provide insights into vendor performance and compliance, helping you make informed decisions.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="aboutUs-footer">
            <div className="aboutUs-footerTIttle">
            <h1>What Sets Folsight Apart</h1>
            <p>Innovation-Driven Solutions: Our platform is built on cutting-edge technology, ensuring that we deliver the most advanced and effective solutions in the industry. We continuously innovate to stay ahead of the evolving needs of our clients.</p>
            </div>
            <div className="row aboutUs-footerContainer">
              <div className="col-lg-3 col-md-6 aboutUs-footerParent">
                <div className="aboutUs-footerChild" style={{background:"inherit"}}>
                <h4>User-Centric Design</h4>
                  <div className="footerCildText">
                  <div className="footerChildicon">
                  <i class="fa-solid fa-user"></i>
                  </div>
                  <div className="footerCildTextScroll">
                  <p>Folsight is designed with the user in mind. Our intuitive interface and user-friendly features make it easy for organizations to adopt and integrate our solutions into their existing workflows.</p>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aboutUs-footerParent">
                <div className="aboutUs-footerChild active-aboutUsFooter">
                    <h4>Comprehensive Analytics</h4>
                  <div className="footerCildText">
                  <div className="footerChildicon">
                  <i class="fa-duotone fa-solid fa-sack-dollar"></i>
                  </div>
                  <div className="footerCildTextScroll">
                    <p> <p>Leverage the power of data with Folsight’s comprehensive analytics tools. Our platform provides actionable insights that enable you to make informed decisions and drive strategic growth.</p></p>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aboutUs-footerParent">
                <div className="aboutUs-footerChild">
                   <h4>Dedicated Customer Support</h4>
                  <div className="footerCildText">
                  <div className="footerChildicon">
                  <i className="fa-solid fa-truck"></i>
                  </div>
                  <div className="footerCildTextScroll">
                  <p>At Folsight, we prioritize our clients’ success. Our dedicated support team is available 24/7 to assist you with any questions or issues, ensuring a seamless and satisfactory experience.</p>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 aboutUs-footerParent">
                 <div className="aboutUs-footerChild">
                 <h4>Scalable and Flexible</h4>
                  <div className="footerCildText">
                  <div className="footerChildicon">
                  <i className="fa-solid fa-truck"></i>
                  </div>
                  <div className="footerCildTextScroll">
                  <p>Whether you’re a small business or a large enterprise, Folsight’s solutions are scalable and flexible to meet the unique needs of your organization. Our platform grows with you, providing continuous support and functionality.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div> */}
           <div className="aboutUs-footer">
            <div className="container">
              <div className="aboutUs-footerTittle">
                <h1>What sets folsight apart</h1>
              </div>
              <div className="row aboutUs-footerContaienr" data-aos="flip-down">
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img5} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> User-Centric Design</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img2} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> Comprehensive Analytics</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img3} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> Dedicated Customer Support</h1>  </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img4} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> Scalable and Flexible</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img1} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1>Innovation-Driven Solutions </h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className=" footerChildButton">
                    <button onClick={() => navigate('/request-demo') }>Request a Demo</button>
                </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AboutUsBody


