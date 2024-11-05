import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/FrameWorkPages/frameworkPages_01.scss'
const FrameWorkPage_01 = ({page}) => {
    const [open,setOpen] = useState(false);

    const OpenHandle = () => {
        setOpen(!open);
    }
  return (
    <div>
       <div className= {page === 1 ? "FrameWorkPageBodyChild":"d-none"}>
                        <div className="FrameWorkPageBodyChildTittle">
                            <h1>How to Configure Data Change Policies</h1>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>This article guides clients on how to create and configure their Data Change Approval policies, assign them to specific employee data fields, and adhere to specific organizational requirements.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Data change policies allow the clients to configure custom policies for managing updates to employee personal information, addresses, and emergency contacts.</p>
                            </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Clients can set up approval workflows based on their organization's specific needs and compliance requirements, and apply these policies globally or on a country-by-country basis.</p>
                        </div>
                        <div className="FrameWorkPageBodyChildText">
                            <p>Data change policies can also be set up with multi-step approval processes that ensure robust control over which employee data fields trigger approvals, who reviews and signs off on changes, and how the approval process should be routed. </p>
                        </div>
                        <div className="FrameWorkPageBodyChildTextLink">
                            <h2>in this Article</h2>
                            <ul>
                                <li> <a href="#">How to create data change policy </a></li>
                                <li> <a href="#"> Frequently Asked Questions</a></li>
                            </ul>
                        </div>
                        <div className="FrameWorkPageBodyChildarticle">
                         <div className="article-step">
                            <h2> How to Create Data Change Policy </h2>
                            <h3>✅ Step 1 – Go to the Organization Settings Icon and Click on the Data fields Settings card</h3>
                            <p>In the Data Fields Page, click on the <span>Data Change Policies</span> tab.</p>
                            <div className="article-img">
                            <img src="https://help.letsdeel.com/hc/article_attachments/27809064930321" alt="article-image" />
                        </div>
                        </div>
                        <div className="article-step">
                        <h3>✅ Step 2 – Click on Create Data Change Policy </h3>
                        <p>In the Data Change Policies tab, you can see the default data change policy.</p>
                        <p>To edit an existing field, select the applicable field from the suggested list and click on the edit button.</p>
                        <p>You can edit the default data change policy or create a new data change policy from scratch. </p>
                        <p>Click on the <span>Create Data Change policy</span> button. </p>
                        <div className="article-img">
                            <div className="error-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
                          <p>  Please note that the Default Data change policy cannot be deleted.</p>
                            </div>
                          </div>
                        </div>
                        <div className="article-step">
                            <h3>✅ Step 3 – Add Policy details </h3>
                            <p>You can now name and describe the data change policy. You can also select the countries that are applicable to this policy. </p>
                            <div className="article-img"></div>
                        </div>
                        <div className="article-step">
                            <h3>✅ Step 4 – Configure data fields and select approval policy </h3>
                            <p>In this step, clients can configure which fields need approval when the worker makes changes. These fields include employee personal information, addresses, emergency contacts, etc. </p>
                            <p>Now select the default approval policy for the selected data fields. </p>

                            <p>Click on <span>Create.</span></p>

                        </div>
                        </div>
                        <div className="Frequently">
                            <h2>Frequently Asked Questions</h2>
                            <div className="Frequently_box">
                                <div className="Frequently_boxLeft">
                                    <p>How to edit an existing data change policy?</p>
                                </div>
                                <div className="Frequently_boxRight">
                                <button onClick={OpenHandle} className={open ? "open" : "close"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
                                <button onClick={OpenHandle} className={open ? "close" : "open"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button>
                                </div>
                            </div>
                            <div className={open ? "Frequently_boxTest": " close_box"}>
                                    <p>To edit an existing data change policy, go to the Organization Settings Icon and Click on the Data fields card.  </p>
                                    <p>In the Data fields Page, click on the Data Change Policies tab. Select the applicable policy from the list and click on the three dots to edit the policy. </p>
                                </div>
                        </div>
                        <div className="Frequently_link_box">
                            <div className="Frequently_link_boxLeft linkboxLR">
                            <h3>Recently viewed articles</h3>
                            <ul>
                                <li> <a href="#">Global Payroll Entity Level Permissions</a> </li>
                                <li> <a href="#">What Are The Different Roles For Group Admins In Deel?</a> </li>
                                <li> <a href="#">How to Create Groups and Add Group Admins</a> </li>
                            </ul>
                            </div>
                            <div className="Frequently_link_boxRight linkboxLR">
                            <h3>Related articles </h3>
                            <ul>
                            <li> <a href="#">How to Configure Organization Structure and Worker Relations</a> </li>
                            <li> <a href="#">About Groups on Deel</a> </li>
                                <li> <a href="#">How to Adjust Time Off Balances for Your Workers</a> </li>
                                <li> <a href="#">How to Create Groups and Add Group Admins</a> </li>
                                <li> <a href="#">How to Manage Registration Files</a> </li>
                            </ul>



                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default FrameWorkPage_01
