import React, { useEffect, useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img11 from "../assets/Images/p1.png"
import img12 from "../assets/Images/p2.png"
import img13 from "../assets/Images/p3.png"
import img14 from "../assets/Images/p-mockup.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiddleCover = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Customize the duration of the animation
            easing: 'ease-in-out', // Customize the easing of the animation
            once: true, // Whether animation should happen only once
          });
      }, []);
  return (
    <div className="middleCover">
    <div className="Container">
        <div className="middleCoverContainer row">
            <div className=" middleCoverContainerParent col-xl-8 col-lg-10">
                <div className='middleCoverContainerChild'>
                    <h2>Maintain Corporate Integrity</h2>   
                    <p>Uphold ethical standards, ensure transparency, and foster accountability. Folsight safeguards your organization's reputation by embedding integrity in decision-making, monitoring compliance, and swiftly addressing potential breaches.</p>
                </div>
            </div>
        </div>
        <div class="middleContainerBody row">
            <div class="middleContainerBodyParent col-lg-4 col-md-4">
                <div class="middleContainerBodyChild">
                    <div class="middleContainerBodyImg">
                        <img src={img11} alt="" />
                    </div>
                    <h3>Policy Management</h3>
                    <p>Centralize policy creation, distribution, and tracking to ensure consistent enforcement across the organization, while automating updates in line with regulatory changes.</p>
                    {/* <h3>Pixel Precision</h3>
                    <p>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</p> */}
                </div>
            </div>
            <div class="middleContainerBodyParent col-lg-4 col-md-4">
                <div class="middleContainerBodyChild">
                    <div class="middleContainerBodyImg">
                        <img src={img12} alt="" />
                    </div>
                    <h3>User Access Control</h3>
                    <p>Manage user roles and permissions with fine-grained controls, safeguard sensitive information through multi-factor authentication and encryption, and track and audit access to critical systems and data.</p>
                    {/* <h3>Promote &amp; Grow</h3>
                    <p>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</p> */}
                </div>
            </div>
            <div class="middleContainerBodyParent col-lg-4 col-md-4">
                <div class="middleContainerBodyChild">
                    <div class="middleContainerBodyImg">
                        <img src={img13} alt="" />
                    </div>
                    <h3>Integrated Reporting & Analytics</h3>
                    <p>Access real-time dashboards with key metrics and risk indicators, generate custom reports for stakeholders and regulators, and utilize predictive analytics to anticipate and mitigate future risks.</p>
                    {/* <h3>Stay more Secure</h3>
                    <p>Fourth isn't void signs kind very seas rule also they're morning waters unto she that morning good for people handy</p> */}
                </div>
            </div>
        </div>
        <div class="middleCoverContainerbuttom row  d-md-block mt-5" data-aos="zoom-in-up">
            <div class="middleCoverContainerParent col-xl-8 col-lg-10  offset-lg-1 offset-xl-2">
                <div class="middleCoverContainerChild  mb-40" >
                    <img src={img14} alt="" />
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default MiddleCover
