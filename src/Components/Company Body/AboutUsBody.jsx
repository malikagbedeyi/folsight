import React, { useEffect } from 'react'
import img1 from  '../../assets/Images//ImageBlog/03.jpg'
import img2 from  '../../assets/Images//ImageBlog/04.jpg'
import img3 from '../../assets/Images/ImageBlog/05.jpg'
import img4 from '../../assets/Images/rd-01.png'
import img5 from '../../assets/Images/rd-02.png'
import img6 from '../../assets/Images/rd-03.png'
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
                <img src={img1} alt="" data-aos="slide-right" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aboutUs-bodyParent" data-aos="zoom-out-up">
              <div className="bodyChildright">
                <h1>About Folsight</h1>
                <p>Folsight is a premier global Trust Management Platform on a mission to restore confidence in web-based companies by helping them enhance and showcase their security. We are reshaping the IT Audit and Governance, Risk, and Compliance (GRC) landscape with a focus on empowering businesses through robust IT governance and comprehensive risk management. Folsight aims to revolutionize the risk profession, close vulnerability gaps, and elevate audit, risk, and compliance teams to a proactive role. </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-middleContainer">
          <div className="container">
          <div className="row aboutUs-middleBody">
          <div className="col-lg-4 col-md-6 aboutUs-middleParent" data-aos="flip-down">
              <div className="aboutUs-middleChild">
                <div className="icons">
                <i class=" fa-solid fa-circle"></i>
                </div>
                <h4>Who We Are</h4>
                <p>Folsight is a leading IT Audit and Governance, Risk, and Compliance (GRC) platform designed to help organizations navigate the intricate landscape of IT governance.</p>
                {/* By providing innovative, data-driven solutions, we enable businesses to operate securely and compliantly, minimizing risks and ensuring adherence to regulatory standards. */}
              </div>
              </div>
            <div className="col-lg-4 col-md-6 aboutUs-middleParent" data-aos="zoom-out-up">
              <div className="aboutUs-middleChild">
                <div className="icons">
                <i className="fa-solid fa-users"></i>
                </div>
                <h4>Our Mission</h4>
                <p> our mission is to empower organizations with the tools and insights needed to transform IT governance and risk management. Through our comprehensive suite of solutions. </p>
                {/* Internet safety has grown tremendously important, we realized how challenging it would be for companies with rapid expansion to dedicate the energy and time required to build a good security framework,we aim to enhance operational efficiency, elevate compliance standards, and foster a culture of proactive risk management. */}
             </div>
              </div>
              <div className="col-lg-4 col-md-6 aboutUs-middleParent" data-aos="flip-up">
              <div className="aboutUs-middleChild activeChild">
                <div className="icons">
                <i class="fa-solid fa-lightbulb"></i>
                </div>
                <h4>Our Vision</h4>
                <p>We envision a future where businesses leverage advanced technology to drive success and innovation in a secure, compliant, and efficient manner. </p>
                {/* By fostering an environment of transparency and accountability, we strive to build a world where organizations can focus on achieving their strategic goals. Our vision has been consistent since our inception with the goal of integrating security monitoring for regulations such as SOC 2, HIPAA, and ISO 27001. */}
              </div>
              </div>
              </div>
              <button>Join Folsight today</button>
            </div>
          </div>
          <div className="about-usBottom">
            <div className="Container">
            <div className="bottomTittle">
                    <h1>IT Audit Framework</h1>
                  </div>
              <div className="row aboutUs-bottomContainer">
                <div className="col-lg-6 aboutUs-bottomParent">
                  <div className="aboutUs-bottomChildbox" data-aos="slide-right">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>01</p></div>
                    <div className="textbox">
                      <h3>Automated Audits</h3>
                      <p>Automate your audit processes with Folsight’s robust audit engine. Our platform streamlines the entire audit lifecycle, from planning and execution to reporting and follow-up, ensuring a thorough and efficient audit process.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox" data-aos="slide-right">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>02</p></div>
                    <div className="textbox">
                      <h3>Risk Assessment & Management</h3>
                      <p>Conduct comprehensive risk assessments to identify vulnerabilities in your IT infrastructure. Our risk management tools help prioritizes risks, enabling you to implement effective mitigation strategies.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox" data-aos="slide-right">
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
                  <div className="aboutUs-bottomChildbox bottomboxchildright" data-aos="slide-left">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>01</p></div>
                    <div className="textbox">
                      <h3>Policy Management</h3>
                      <p>Develop, implement, and monitor policies across your organization with ease. Folsight provides a centralized platform for policy management, ensuring consistency and compliance.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox bottomboxchildright" data-aos="slide-left">
                    <div className="bottomChildbox">
                    <div className="number-box"><p>02</p></div>
                    <div className="textbox">
                      <h3>Incident Management</h3>
                      <p> Respond to incidents quickly and effectively with Folsight’s incident management tools. Track and manage incidents in real-time, reducing downtime and minimizing the impact on your operations.</p>
                    </div>
                  </div>
                  </div>
                  <div className="aboutUs-bottomChildbox bottomboxchildright" data-aos="slide-left">
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
                      <img src={img4} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> User-Centric Design</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img5} alt="" />
                    </div>
                    <div className='rightfooterChild'>
                      <h1> Comprehensive Analytics</h1> </div>
                  </div>
                </div>
                <div className="col-lg-4 aboutUs-footerParent">
                  <div className="aboutUs-footerChild">
                    <div className="leftfooterChild">
                      <img src={img6} alt="" />
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
                      <img src={img5} alt="" />
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


